import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../auth/constants";
import {ContactsRepository} from "./contacts.repository";

@Module({
  imports: [
  TypeOrmModule.forFeature([ContactsRepository])],
  providers: [ContactsService],
  exports: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
