import {EntityRepository, Repository} from "typeorm";
import {Users} from "./entities/Users";
import {AuthCredentialsDto} from "../auth/dtos/auth-credentials.dto";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const {username, password} = authCredentialsDto;
        const user = new Users();
        user.username = username;
        user.password = password;

        await user.save();
    }
}
