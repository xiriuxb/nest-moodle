import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { UpdatePayMathodDto } from "./adm_pay_method.dto";

@Injectable()
export class AdmPayMethodService{
    constructor(
        private dbService: DatabaseService
    ){}
    async getAll(){
        return await this.dbService.paymentMethod.findMany();
    }

    async updateActive(id:number, dto:UpdatePayMathodDto){
        try {
            await this.dbService.paymentMethod.update({
                where:{id:id},
                data:{
                    active:dto.active,
                }
            });
            return {message:'OK'}
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}