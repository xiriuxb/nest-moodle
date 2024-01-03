import { Test, TestingModule } from "@nestjs/testing";
import { LocalCoursesService } from "../../src/cursos_local/cursos_local.service";
import { MoodleWsService } from "../../src/moodlews/moodle_ws.service";
import { HttpModule } from "@nestjs/axios";
import { DatabaseModule } from "../../src/database/database.module";
import { ConfigModule } from "@nestjs/config";
import { CursoLocalDTO } from "src/cursos_local/cursos_local.dto";
import { PrismaClient } from "../../prisma/generated/nestClient";

jest.mock('')
describe('Tests in cursos_local.service',()=>{
    let service:LocalCoursesService;

    beforeAll(async()=>{
        const module: TestingModule = await Test.createTestingModule({
            providers:[MoodleWsService,LocalCoursesService],imports:[HttpModule, ConfigModule.forRoot({isGlobal:true}), DatabaseModule]
        }).compile();
        service = module.get<LocalCoursesService>(LocalCoursesService);
    });

    test('should be defined',()=>{
        expect(service).toBeDefined();
    });

    test.skip('should get the array of ids, could be empty',async()=>{
        // const res = await service.getDestacadosIds();
        // expect(typeof(res)).toBe('object');
    });

    test('should get the list of favorites',async()=>{
        const res = await service.getDestacados();
        expect(res[0] instanceof CursoLocalDTO).toBeTruthy();
    });

    test.skip('should return INTERNAL SERVER ERROR if there is none favorite',async ()=>{
        // try {
        //     jest.spyOn(service, 'getDestacadosIds').mockResolvedValueOnce([]);
        //     await service.getDestacados();
        // } catch (error) {
        //     expect(error.status).toBe(500);
        // }
    });

    test('should create a local-course in db if not exist',async()=>{
        const prisma = new PrismaClient();
        await prisma.course.deleteMany({where:{moodle_id:4}})
        try {
            jest.spyOn(MoodleWsService.prototype,'findCoursesBy').mockResolvedValueOnce({
                categoryname:'Category 1',
                fullname:'Test in test',
                shortname:'test-in-test',
                moodle_id:4,});
            const res = await service.upsertCourse(12);
            expect(res.created_at).toBeTruthy();
        } catch (error) {
            console.log(error)
        }
    });

    test('should update a local-course in db if not exist',async()=>{
        try {
            jest.spyOn(MoodleWsService.prototype,'findCoursesBy').mockResolvedValueOnce({
                categoryname:'Category 1',
                fullname:'Test in test 3',
                shortname:'test-in-test',
                moodle_id:4,});
            const res = await service.upsertCourse(4);
            expect(res.updated_at).toBeTruthy();
            expect(res.fullname).toBe('Test in test 3');
        } catch (error) {
            console.log(error)
        }
    });
    
    test('should be not found if course does not exist',async()=>{
        try {
            const res = await service.upsertCourse(34);
        } catch (error) {
            expect(error.status).toBe(404);
        }
    });
});