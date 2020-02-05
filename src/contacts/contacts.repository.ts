import {EntityRepository, Repository} from "typeorm";
import {Contacts} from "./entities/Contacts";

@EntityRepository(Contacts)
export class ContactsRepository extends Repository<Contacts>{

}
