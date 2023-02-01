import { Body, Controller, Get, Param, ParseIntPipe, Patch } from "@nestjs/common";
import { UpdatePayMathodDto } from "./adm_pay_method.dto";
import { AdmPayMethodService } from "./adm_pay_method.service";

@Controller('admin/payment_method')
export class AdmPayMethodController{
    constructor(
        private service : AdmPayMethodService
    ){}

    @Get()
    getAll(){
        return this.service.getAll();
    }

    @Patch('/:methodId')
    updateActive(
        @Body() dto:UpdatePayMathodDto,
        @Param('methodId', ParseIntPipe) methodId:number
    ){
        return this.service.updateActive(methodId, dto);
    }
}