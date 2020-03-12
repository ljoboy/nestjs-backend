import {GenreEnum} from "../genre.enum";
import {IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from "class-validator";

export class RegisterCredentialsDto {
    @IsOptional()
    @IsString()
    full_name: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    ville: string;

    @IsOptional()
    @IsString()
    country: string;

    @IsOptional()
    @IsString()
    @IsEnum(GenreEnum)
    genre: GenreEnum;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(40)
    password: string;
}
