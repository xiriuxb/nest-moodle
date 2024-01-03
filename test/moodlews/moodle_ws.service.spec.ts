import { Test, TestingModule } from "@nestjs/testing";
import { MoodleWsService } from "../../src/moodlews/moodle_ws.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

describe('Tests in MoodleWS service',()=>{

    let service: MoodleWsService;
    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            providers:[MoodleWsService],imports:[ConfigModule.forRoot({isGlobal:true}), HttpModule]
        }).compile();
        service = module.get<MoodleWsService>(MoodleWsService);
    });

    test('should be defined',()=>{
        expect(service).toBeDefined();
    });

    test('shoud return the course if exist--by ids',async ()=>{
        //remember id:1 is Moodle installation, not a course
            const response = await service.findCoursesBy('ids',[2]);
            expect(response.courses[0].id).toBe(2);

    });

    test('should return the course if exist--by shortname',async ()=>{
        const response = await service.findCoursesBy("shortname",['test2']);
        expect(response.courses[0].id).toBe(3);
    });

    test('should throw error.message "Not Found" if course does not exist--by ids', async ()=>{
        try{
            await service.findCoursesBy('ids',[89]);
        }catch(e){
            expect(e.response.message).toBe('Not Found');
        }
    });

    test('should throw error.message "Not Found" if course does not exist--by shortname', async ()=>{
        try{
            await service.findCoursesBy('shortname',['jnaskas']);
        }catch(e){
            expect(e.response.message).toBe('Not Found');
        }
    });

});