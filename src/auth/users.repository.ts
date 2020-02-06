import {EntityRepository, Repository} from "typeorm";
import {Users} from "./entities/Users";
import {AuthCredentialsDto} from "./dtos/auth-credentials.dto";
import {ConflictException, InternalServerErrorException} from "@nestjs/common";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const {username, password} = authCredentialsDto;

        const user = new Users();
        user.username = username;
        user.password = password;

        try {
            await user.save();
        }catch (error) {
            if (error.code === 'SQLITE_CONSTRAINT')
                throw new ConflictException('Username already taken');
            else
                throw new InternalServerErrorException();
        }
    }
}
