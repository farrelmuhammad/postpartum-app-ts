/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SymptomsModule } from './symptoms/symptoms.module';

@Module({
  imports: [
    SymptomsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postpartum-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  AuthModule,
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
