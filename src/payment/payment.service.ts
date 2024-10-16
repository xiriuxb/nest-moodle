import { Injectable } from "@nestjs/common";
import { Course } from "prisma/generated/nestClient";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class PaymentService{
    constructor(
        private readonly dbService : DatabaseService
    ){}

    async createPayment(paymentMethod:number, course:Course) {
        // await this.dbService.payment.create({
            
        // });
    }

    private async dataForPayment(paymentMethod:number, course:Course){
        switch (paymentMethod) {
            case 2:
                return{
                    amount:0,

                }
                break;
        
            default:
                break;
        }
    }
    
}