import {EntityRepository, Repository} from "typeorm";
import {Emails} from "./entities/Emails";

@EntityRepository(Emails)
export class EmailsRepository extends Repository<Emails>{

}
