import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Phones} from "../entities/Phones";

@Module({
  imports: [TypeOrmModule.forFeature([Phones])],
  controllers: [PhonesController],
  providers: [PhonesService],
  exports: [PhonesService]
})
export class PhonesModule {}
