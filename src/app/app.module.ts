import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import mongoConfig from '../config/mongodb-connection';

ConfigModule.forRoot({ isGlobal: true });

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig().MONGO_URI),
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
