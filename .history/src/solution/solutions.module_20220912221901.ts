/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AuthModule } from 'src/auth/auth.module';
import { SolutionsController } from './solutions.controller';
import { SolutionsRepository } from './solutions.repository';
import { SolutionsService } from './solutions.service';

@Module({
  imports: [TypeOrmModule.forFeature([SolutionsRepository]), AuthModule],
  controllers: [SolutionsController],
  providers: [SolutionsService],
})
export class SymptomsModule {}
