import {IsString, MaxLength, MinLength} from "class-validator";

export class LoginCredentialsDto {
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(40)
    password: string;
}
