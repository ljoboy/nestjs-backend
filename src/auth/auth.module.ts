import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthController } from './auth.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersRepository} from "./users.repository";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
        secret: 'AllegrA1322',
        signOptions: {
          expiresIn: 3600,
        },
      }),
      TypeOrmModule.forFeature([UsersRepository])
  ],
  providers: [
      AuthService,
      JwtStrategy,
  ],
  exports: [
      AuthService,
      JwtStrategy,
      PassportModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
