import { Injectable } from "@nestjs/common";
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DatabaseService extends PrismaClient {
    constructor(){
        super({
            datasources: {
                db: {
                    url: 'mysql://root:4569871230@172.18.0.2:3306/nestdb'
                },
            },
        });
    }
}
