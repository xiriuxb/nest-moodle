import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class UserService {
    constructor(private dbService: DatabaseService) { }

}