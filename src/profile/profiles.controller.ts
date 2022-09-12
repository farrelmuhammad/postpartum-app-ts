/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { GetProfilesFilterDto } from "./dto/get-profiles-filter.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { Profile } from "./profile.entity";
import { ProfilesService } from "./profiles.service";

@Controller('profiles')
@UseGuards(AuthGuard())
export class ProfilesController {
    constructor(private profilesService: ProfilesService) { }
    
    @Get()
    getProfiles(
        @Query() filterDto: GetProfilesFilterDto,
    ): Promise<Profile[]> {
        return this.profilesService.getProfiles(filterDto);
    }

    @Get('/:id')
    getProfileById(
        @Param('id') id: string,
    ): Promise<Profile> {
        return this.profilesService.getProfileById(id);
    }

    @Post()
    createProfile(
        @Body() createProfileDto: CreateProfileDto,
    ): Promise<Profile> {
        return this.profilesService.createProfile(createProfileDto);
    }

    @Patch('/:id')
    updateProfile(
        @Param('id') id: string,
        @Body() updateProfile: UpdateProfileDto,
    ): Promise<Profile> {
        return this.profilesService.updateProfile(id);
    }
}