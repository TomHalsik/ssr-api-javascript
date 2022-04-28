import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot()],
})
export class AppModule {}