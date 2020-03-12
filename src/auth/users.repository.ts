import {EntityRepository, Repository} from "typeorm";
import {Users} from "./entities/Users";
import {LoginCredentialsDto} from "./dtos/login-credentials.dto";
import {ConflictException, InternalServerErrorException} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import {RegisterCredentialsDto} from "./dtos/register-credentials.dto";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    async signUp(registerCredentialsDto: RegisterCredentialsDto): Promise<void> {
        const {username, password, address, country, email, full_name, genre, ville} = registerCredentialsDto;

        const user = new Users();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        user.address = address;
        user.country = country;
        user.email = email;
        user.full_name = full_name;
        user.genre = genre;
        user.ville = ville;

        try {
            await user.save();
        } catch (error) {
            if (error.code === 'SQLITE_CONSTRAINT')
                throw new ConflictException('Username already taken');
            else
                throw new InternalServerErrorException();
        }
    }

    async validateUserPassword(authCredentialsDto: LoginCredentialsDto): Promise<string> {
        const {username, password} = authCredentialsDto;
        const user = await this.findOne({username});

        if (user && await user.validatePassword(password))
            return user.username;
        else
            return null;
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}
