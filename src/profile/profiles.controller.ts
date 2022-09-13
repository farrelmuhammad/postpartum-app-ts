/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { GetProfilesFilterDto } from './dto/get-profiles-filter.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profile.entity';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
@UseGuards(AuthGuard())
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get()
  getProfiles(
    @Query() filterDto: GetProfilesFilterDto,
    @GetUser() user: User,
  ): Promise<Profile[]> {
    return this.profilesService.getProfiles(filterDto, user);
  }

  @Get('/:id')
  getProfileById(
    @Param('id') id: number,
    @GetUser() user: User,
  ): Promise<Profile> {
    return this.profilesService.getProfileById(id, user);
  }

  @Post()
  createProfile(
    @Body() createProfileDto: CreateProfileDto,
    @GetUser() user: User,
  ): Promise<Profile> {
    return this.profilesService.createProfile(createProfileDto, user);
  }

//   @Patch('/:id')
//   updateProfile(
//     @Param('id') id: string,
//     @Body() updateProfile: UpdateProfileDto,
//     @GetUser() user: User,
//   ): Promise<Profile> {
//     return this.profilesService.updateProfile(id);
//   }
}
