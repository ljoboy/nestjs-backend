import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ContactsRepository} from "./contacts.repository";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
      TypeOrmModule.forFeature([ContactsRepository]),
      AuthModule,
  ],
  providers: [ContactsService],
  exports: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
