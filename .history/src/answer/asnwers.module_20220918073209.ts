/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { AnswersController } from "./answers.controller";
import { AnswersRepository } from "./answers.repository";
import { AnswersService } from "./answers.service";

@Module({
    imports: [TypeOrmModule.forFeature([AnswersRepository]), AuthModule],
    controllers: [AnswersController],
    providers: [AnswersService]
})
export class AnswersModule {}