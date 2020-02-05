import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {Users} from "./entities/Users";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsersService extends TypeOrmCrudService<Users>{
    constructor(@InjectRepository(Users) repo) {
        super(repo);
    }
}
