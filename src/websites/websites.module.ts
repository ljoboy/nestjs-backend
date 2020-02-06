import { Module } from '@nestjs/common';
import { WebsitesService } from './websites.service';
import { WebsitesController } from './websites.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Websites} from "./entities/Websites";
import {AuthModule} from "../auth/auth.module";

@Module({
  providers: [WebsitesService],
  controllers: [WebsitesController],
  imports: [
    TypeOrmModule.forFeature([Websites]),
    AuthModule,
  ],
  exports: [WebsitesService]
})
export class WebsitesModule {}
