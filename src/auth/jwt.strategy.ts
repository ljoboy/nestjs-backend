import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtPayload} from "./jwt-payload.interface";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersRepository} from "./users.repository";
import {Users} from "./entities/Users";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'AllegrA1322',
        });
    }

    async validate(payload: JwtPayload): Promise<Users> {
        const { username } = payload;
        const user = await this.usersRepository.findOne({ username });

        if (!user)
            throw new UnauthorizedException()

        return user;
    }
}
