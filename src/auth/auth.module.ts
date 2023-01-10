import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MailModule } from "src/mail/mail.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { JwtStrategyBearer } from "./strategy/jwt_bearer.strategy";

@Module({
    imports:[JwtModule.register({}), MailModule],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtStrategyBearer]
})
export class AuthModule {}