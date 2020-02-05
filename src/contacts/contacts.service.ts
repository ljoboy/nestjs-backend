import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {ContactsRepository} from "./contacts.repository";
import {Contacts} from "./entities/Contacts";

@Injectable()
export class ContactsService extends TypeOrmCrudService<Contacts>{
    constructor(@InjectRepository(ContactsRepository) repo) {
        super(repo);
    }
}
