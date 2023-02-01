import { Module } from "@nestjs/common";
import { AdmPayMethodController } from "./adm_pay_method.controller";
import { AdmPayMethodService } from "./adm_pay_method.service";

@Module({
    controllers:[AdmPayMethodController],
    providers:[AdmPayMethodService]
})
export class AdmPayMethodModule{

}