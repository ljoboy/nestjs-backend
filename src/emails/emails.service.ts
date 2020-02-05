import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {Emails} from "./entities/Emails";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class EmailsService extends TypeOrmCrudService<Emails>{
    constructor(@InjectRepository(Emails) repo) {
        super(repo);
    }
}
