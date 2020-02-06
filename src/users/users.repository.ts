import {EntityRepository, Repository} from "typeorm";
import {Users} from "./entities/Users";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{

}
