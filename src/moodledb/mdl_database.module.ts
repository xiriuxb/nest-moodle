import { Global, Module } from "@nestjs/common";
import { MoodleDatabaseService } from "./mdl_database.service";

@Global()
@Module({
    providers:[MoodleDatabaseService],
    exports:[MoodleDatabaseService]
})

export class MoodleDatabaseModule{}