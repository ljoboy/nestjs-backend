import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {Phones} from "../entities/Phones";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PhonesService extends TypeOrmCrudService<Phones>{
    constructor(@InjectRepository(Phones) repo) {
        super(repo);
    }
}
