import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ContactsModule } from './contacts/contacts.module';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/entities/*{.ts,.js}'],
  }), ContactsModule, EmailsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
