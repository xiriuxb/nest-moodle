import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MailService } from "./mail.service";
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
    providers: [MailService],
    imports: [
        MailerModule.forRootAsync({
            useFactory: async (config: ConfigService) => ({
                // transport: config.get("MAIL_TRANSPORT"),
                // or
                transport: {
                    host: config.get('MAIL_HOST'),
                    port: config.get('MAIL_PORT'),
                    connectionTimeout: 10000,
                    secure: true,
                    auth: {
                        user: config.get('MAIL_USERNAME'),
                        pass: config.get('MAIL_PASSWORD'),
                    },
                },
                defaults: {
                    from: `"No Reply" <${config.get('MAIL_FROM_ADDRESS')}>`,
                },
                template: {
                    dir: join(__dirname, 'templates'),
                    adapter: new HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
            inject: [ConfigService],
        }),
    ],
    exports: [MailService],
})
export class MailModule {
};