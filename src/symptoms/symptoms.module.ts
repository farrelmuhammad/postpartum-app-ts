/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AuthModule } from 'src/auth/auth.module';
import { SymptomsController } from './symptoms.controller';
import { SymptomsRepository } from './symptoms.repository';
import { SymptomsService } from './symptoms.service';

@Module({
  imports: [TypeOrmModule.forFeature([SymptomsRepository]), AuthModule],
  controllers: [SymptomsController],
  providers: [SymptomsService],
})
export class SymptomsModule {}
