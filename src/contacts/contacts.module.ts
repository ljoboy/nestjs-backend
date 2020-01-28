import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Contacts} from "../entities/Contacts";

@Module({
  imports: [TypeOrmModule.forFeature([Contacts])],
  providers: [ContactsService],
  exports: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
