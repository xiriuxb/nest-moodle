import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";
import { UserRegisterDto } from "./user.dto";

@Injectable()
export class UserService {
    constructor(private dbService: DatabaseService) { }

    async createUserName(name: string, last_name: string) : Promise<string> {
        const usern = name[0].toLowerCase().concat(last_name.toLowerCase());
        const query = `${usern}%`;
        const users = await this.dbService.$queryRaw`
                SELECT COUNT(*) as count
                FROM User
                WHERE username LIKE ${query};
            `;
        return usern.concat(users[0].count);
    }

    async register(dto: UserRegisterDto) {
        try {

            const argon2 = require('argon2');
            const pass = await argon2.hash(dto.password);
            const username = await this.createUserName(dto.name, dto.last_name);
            return await this.dbService.user.create({
                data: {
                    name: dto.name,
                    last_name: dto.last_name,
                    password: pass,
                    email: dto.email,
                    username: username,
                },
                select: {
                    name: true,
                    last_name: true,
                    email: true,
                    username: true
                }
            });
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === 'P2002') {
                    throw new HttpException({'message':[{'property':'email', 'constrints':{'used':'Email ya registrado'}}]},
                     HttpStatus.BAD_REQUEST, { cause: new Error('') });
                } else {
                    throw new HttpException('Error', HttpStatus.BAD_REQUEST, { cause: new Error('') });
                }
            } else {
                throw new HttpException('error', HttpStatus.BAD_REQUEST, { cause: new Error('') });
            }
        }
    }
}