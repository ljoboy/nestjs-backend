import { Module } from '@nestjs/common';
import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';
import {Emails} from "./entities/Emails";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../auth/constants";

@Module({
  imports: [
    TypeOrmModule.forFeature([Emails])],
  exports: [EmailsService],
  controllers: [EmailsController],
  providers: [EmailsService]
})
export class EmailsModule {}
