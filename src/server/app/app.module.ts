import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from "@nestjs/axios"

@Module({
  controllers: [AppController],
  imports: [
    TypeOrmModule.forRoot(),
    HttpModule,
  ],
})
export class AppModule {}