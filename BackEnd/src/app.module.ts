import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

require('dotenv').config();
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
})
export class AppModule {}
