import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient as PrismaClient1} from '../../prisma/generated/nestClient'

@Injectable()
export class DatabaseService extends PrismaClient1 {
    constructor(config:ConfigService){
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL')
                },
            },
        });
    }
}
