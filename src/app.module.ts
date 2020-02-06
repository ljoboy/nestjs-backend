import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ContactsModule } from './contacts/contacts.module';
import { EmailsModule } from './emails/emails.module';
import { PhonesModule } from './phones/phones.module';
import { WebsitesModule } from './websites/websites.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ContactsModule, EmailsModule, PhonesModule, WebsitesModule, AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      synchronize: false,
      logging: true,
      entities: [__dirname + '/**/entities/*{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
