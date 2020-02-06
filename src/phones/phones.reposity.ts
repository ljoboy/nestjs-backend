import {EntityRepository, Repository} from "typeorm";
import {Phones} from "./entities/Phones";

@EntityRepository(Phones)
export class PhonesReposity extends Repository<Phones>{

}
