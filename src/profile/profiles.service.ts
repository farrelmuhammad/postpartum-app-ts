/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { GetProfilesFilterDto } from "./dto/get-profiles-filter.dto";
import { Profile } from "./profile.entity";
import { ProfilesRepository } from "./profiles.repository";

export class ProfilesService {
    constructor(
        @InjectRepository(ProfilesRepository)
        private profilesRepository: ProfilesRepository,
    ) {}

    getProfiles(filterDto: GetProfilesFilterDto): Promise<Profile[]> {
        return this.profilesRepository.getProfiles(filterDto);
    }

    async getProfileById(
        id: string,
    ): Promise<Profile> {
        const found = await this.profilesRepository.findOne({ where:id });

        if (!found) {
            throw new NotFoundException(`Profile with ID "${id}" not found`)
        }

        return found;
    }

    createProfile(
        createProfileDto: CreateProfileDto,
    ): Promise<Profile> {
        return this.profilesRepository.createProfiles(createProfileDto)
    }

    async deleteProfile(
        id: string
    ): Promise<void> {
        const result = await this.profilesRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Profile with ID "${id}" not found`)
        }
    }

    async updateProfile(
        id: string,
    ): Promise<Profile> {
        const profile = await this.getProfileById(id);

        await this.profilesRepository.save(profile);

        return profile;
    }
}