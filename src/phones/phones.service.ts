import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {Phones} from "./entities/Phones";
import {InjectRepository} from "@nestjs/typeorm";
import {PhonesReposity} from "./phones.reposity";

@Injectable()
export class PhonesService extends TypeOrmCrudService<Phones>{
    constructor(@InjectRepository(PhonesReposity) repo) {
        super(repo);
    }
}
