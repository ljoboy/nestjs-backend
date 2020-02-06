import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PhonesReposity} from "./phones.reposity";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([PhonesReposity]),
    AuthModule,
  ],
  controllers: [PhonesController],
  providers: [PhonesService],
  exports: [PhonesService]
})
export class PhonesModule {}
