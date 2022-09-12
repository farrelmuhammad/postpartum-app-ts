/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { ProfilesController } from "./profiles.controller";
import { ProfilesRepository } from "./profiles.repository";
import { ProfilesService } from "./profiles.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProfilesRepository]), AuthModule],
    controllers: [ProfilesController],
    providers: [ProfilesService],
})
export class ProfilesModule {}