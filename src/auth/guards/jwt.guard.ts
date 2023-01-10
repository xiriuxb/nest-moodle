import { AuthGuard } from "@nestjs/passport";

export class JwtGuardQuery extends AuthGuard('jwt_query'){
    constructor(){
        super();
    }
}