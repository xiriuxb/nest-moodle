import { MailerService } from "@nestjs-modules/mailer";
import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MailContextVariablesDTO } from "./mail.dto";

@Injectable()
export class MailService{
    constructor(private mailerService: MailerService, private config:ConfigService) {}

  async sendEmail(email:string, emailTemplate:string, contextVariables:MailContextVariablesDTO){
    const subjects = {
      './pswrdReset':'Password Reset',
      './emailChanged':'Account Email Changed',
      './passwordChanged':'Account Password Changed',
      './confirmEmail':'Verify Email Address'
    }
    try{
      await this.mailerService.sendMail({
        to: email,
        // from: '"Support Team" <support@example.com>', // override default from
        subject: subjects[emailTemplate],
        template: emailTemplate, // `.hbs` extension is appended automatically
        context: contextVariables
      });
    } catch(error){
      throw new HttpException(new Error(error), HttpStatus.BAD_REQUEST);
    }
  }
}

export enum EmailTemplates{
  CONFIRM_EMAIL = './comfirmEmail',
  EMAIL_UPDATED = './emailChanged',
  PASSWORD_UPDATED = './passwordChanged',
  RESET_PASSWORD = './pswrdReset'
}