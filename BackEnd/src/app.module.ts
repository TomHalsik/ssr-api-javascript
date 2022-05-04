import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios"

require('dotenv').config();
@Module({
  imports: [
   HttpModule,
  ],
})
export class AppModule {}
