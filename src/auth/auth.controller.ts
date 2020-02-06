import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {AuthCredentialsDto} from "./dtos/auth-credentials.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/signup')
    signUp(@Body(ValidationPipe ) authCredentialsDto: AuthCredentialsDto) {
        return this.authService.signUp(authCredentialsDto);
    }


}
