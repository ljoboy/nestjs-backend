import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {Users} from "./entities/Users";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersRepository} from "./users.repository";

@Injectable()
export class UsersService extends TypeOrmCrudService<Users>{
    constructor(@InjectRepository(UsersRepository) repo) {
        super(repo);
    }
}
