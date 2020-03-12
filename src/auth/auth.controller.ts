import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {LoginCredentialsDto} from "./dtos/login-credentials.dto";
import {AuthService} from "./auth.service";
import {RegisterCredentialsDto} from "./dtos/register-credentials.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/signup')
    signUp(@Body(ValidationPipe) registerCredentialsDto: RegisterCredentialsDto) {
        return this.authService.signUp(registerCredentialsDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto: LoginCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCredentialsDto);
    }
}
