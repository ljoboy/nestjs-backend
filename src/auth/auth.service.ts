import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersRepository} from "./users.repository";
import {LoginCredentialsDto} from "./dtos/login-credentials.dto";
import {JwtService} from "@nestjs/jwt";
import {JwtPayload} from "./jwt-payload.interface";
import {RegisterCredentialsDto} from "./dtos/register-credentials.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
        private jwtService: JwtService,
    ) {
    }

    async signUp(registerCredentialsDto: RegisterCredentialsDto): Promise<void> {
        return this.usersRepository.signUp(registerCredentialsDto);
    }

    async signIn(authCredentialsDto: LoginCredentialsDto): Promise<{ accessToken: string }> {
        const username = await this.usersRepository.validateUserPassword(authCredentialsDto);

        if (!username)
            throw new UnauthorizedException('Invalid credentials!');

        const payload: JwtPayload = {username};
        const accessToken = await this.jwtService.sign(payload);
        return {accessToken};
    }
}
