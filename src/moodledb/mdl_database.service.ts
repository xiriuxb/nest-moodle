import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient  as PrismaClient2}  from "../../prisma/generated/moodleClient"

@Injectable()
export class MoodleDatabaseService extends PrismaClient2 {
    constructor(config:ConfigService){
        super({
            datasources: {
                db: {
                    url: config.get('MOODLE_DB_URL')
                },
            },
            log:['query', 'info', 'warn', 'error']
        });
    }
}
