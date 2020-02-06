import {EntityRepository, Repository} from "typeorm";
import {Users} from "./entities/Users";
import {AuthCredentialsDto} from "./dtos/auth-credentials.dto";
import {ConflictException, InternalServerErrorException} from "@nestjs/common";
import * as bcrypt from "bcrypt";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const {username, password} = authCredentialsDto;

        const user = new Users();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        try {
            await user.save();
        }catch (error) {
            if (error.code === 'SQLITE_CONSTRAINT')
                throw new ConflictException('Username already taken');
            else
                throw new InternalServerErrorException();
        }
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const {username, password} = authCredentialsDto;
        const user = await this.findOne({ username });

        if (user && await user.validatePassword(password))
            return user.username;
        else
            return null;
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}
