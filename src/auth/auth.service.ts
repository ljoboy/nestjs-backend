import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersRepository} from "./users.repository";
import {AuthCredentialsDto} from "./dtos/auth-credentials.dto";
import {JwtService} from "@nestjs/jwt";
import {JwtPayload} from "./jwt-payload.interface";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
        private jwtService: JwtService,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.usersRepository.signUp(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        const username = await this.usersRepository.validateUserPassword(authCredentialsDto);

        if (!username)
            throw new UnauthorizedException('Invalid credentials!');

        const payload: JwtPayload = { username };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
}
