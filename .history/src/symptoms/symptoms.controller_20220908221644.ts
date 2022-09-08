/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Patch,
    Query,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { SymptomsService } from './symptoms.service';
import { Logger } from '@nestjs/common';

@Controller('symptoms')
@UseGuards(AuthGuard())
export class SymptomsController {
    // private logger = new Logger('TasksController');

    constructor(private symptomsService: SymptomsService) { }

}