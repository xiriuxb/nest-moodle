import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { MoodleWsService } from "./moodle_ws.service";

@Module({
    providers:[MoodleWsService],
    exports:[MoodleWsService],
    imports:[HttpModule]
})
export class MoodleWsModule{}