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

@Controller('symptoms')
@UseGuards(AuthGuard())
export class SymptomsController {

}