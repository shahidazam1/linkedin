import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://shahid:Shahid575%40@cluster0.aq2ma2j.mongodb.net/mongo_first',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
