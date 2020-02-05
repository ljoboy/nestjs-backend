import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {Websites} from "./entities/Websites";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class WebsitesService extends TypeOrmCrudService<Websites>{
    constructor(@InjectRepository(Websites) repo) {
        super(repo);
    }
}
