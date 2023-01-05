import { MailerService } from "@nestjs-modules/mailer";
import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MailService{
    constructor(private mailerService: MailerService, private config:ConfigService) {}

  async sendUserResetPswrdToken(email:string, name:string, token: string) {
    const url = `${this.config.get('APP_URL')}auth/reset_password?token=${token}`;

    try{
      await this.mailerService.sendMail({
        to: email,
        // from: '"Support Team" <support@example.com>', // override default from
        subject: 'Cambio de Contraseña',
        template: './pswrdReset', // `.hbs` extension is appended automatically
        context: { // ✏️ filling curly brackets with content
          name: name,
          url,
        },
      });
    } catch (error) {
      throw new HttpException(new Error(error), HttpStatus.BAD_REQUEST);
    }
  }
}