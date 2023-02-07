import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DomainModule } from 'src/modules/domain/domain.module';
import mongoConfig from '../config/mongodb-connection';

ConfigModule.forRoot({ isGlobal: true });

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig().MONGO_URI),
    ScheduleModule.forRoot(),
    DomainModule,
    AuthModule,
  ],
})
export class AppModule {}
