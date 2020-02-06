import { Module } from '@nestjs/common';
import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../auth/constants";
import {EmailsRepository} from "./emails.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([EmailsRepository])],
  exports: [EmailsService],
  controllers: [EmailsController],
  providers: [EmailsService]
})
export class EmailsModule {}
