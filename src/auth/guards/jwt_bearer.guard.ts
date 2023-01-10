import { AuthGuard } from "@nestjs/passport";

export class JwtGuardBearer extends AuthGuard('jwt_bearer'){
    constructor(){
        super();
    }
}