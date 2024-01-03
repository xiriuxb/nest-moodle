import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { MoodleWsService } from "../../src/moodlews/moodle_ws.service";
import { HttpModule, HttpService } from "@nestjs/axios";
import { Observable, of } from "rxjs";

describe('Test in moodle_ws service --no db required',()=>{
    let service: MoodleWsService;
    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            providers:[MoodleWsService],imports:[ConfigModule.forRoot({isGlobal:true}), HttpModule]
        }).compile();
        service = module.get<MoodleWsService>(MoodleWsService);
        jest.clearAllMocks();
    });

    test('should be defined',()=>{
        expect(service).toBeDefined();
    });
    
    test('shoud return the course if exist--by ids',async ()=>{
        //remember id:1 is Moodle installation, not a course
        const httpSpy = jest.spyOn(HttpService.prototype,'request').mockReturnValueOnce(of({
            data: {courses:[{id:2}]},
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        }));
        const response = await service.findCoursesBy('ids',[2]);
        expect(response.courses[0].id).toBe(2);

    });
    
    test('should return the course if exist--by shortname',async ()=>{
        const httpSpy = jest.spyOn(HttpService.prototype,'request').mockReturnValueOnce(of({
            data: {courses:[{id:3}]},
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        }));
        const response = await service.findCoursesBy("shortname",['test2']);
        expect(response.courses[0].id).toBe(3);
    });
        
    test('should throw error.message "Not Found" if course does not exist--by ids', async ()=>{
        const err = { response: {message:'Not Found'}, status: '404' }
        try{
            const httpSpy = jest.spyOn(HttpService.prototype,'request').mockImplementationOnce(() => new Observable(subscriber => subscriber.error(err)));
            const response = await service.findCoursesBy('ids',[2]);
        }catch(e){
            expect(e.response.message).toBe('Not Found');
        }
    });

    test('should throw error.message "Not Found" if course does not exist--by shortname', async ()=>{
        const err = { response: {message:'Not Found'}, status: '404' }
        try{
            const httpSpy = jest.spyOn(HttpService.prototype,'request').mockImplementationOnce(() => new Observable(subscriber => subscriber.error(err)));
            const response = await service.findCoursesBy('ids',[2]);
        }catch(e){
            expect(e.response.message).toBe('Not Found');
        }
    });

});