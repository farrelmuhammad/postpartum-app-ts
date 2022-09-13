/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { GetProfilesFilterDto } from "./dto/get-profiles-filter.dto";
import { Profile } from "./profile.entity";
import { ProfilesRepository } from "./profiles.repository";

export class ProfilesService {
    constructor(
        @InjectRepository(ProfilesRepository)
        private profilesRepository: ProfilesRepository,
    ) {}

    getProfiles(filterDto: GetProfilesFilterDto, user: User): Promise<Profile[]> {
        return this.profilesRepository.getProfiles(filterDto, user);
    }

    async getProfileById(
        id: number,
        user: User
    ): Promise<Profile> {
        const found = await this.profilesRepository.findOne({ where: { id, user } });

        if (!found) {
            throw new NotFoundException(`Profile with ID "${id}" not found`)
        }

        return found;
    }

    createProfile(
        createProfileDto: CreateProfileDto,
        user: User
    ): Promise<Profile> {
        return this.profilesRepository.createProfiles(createProfileDto, user)
    }

    async deleteProfile(
        id: number,
        user: User
    ): Promise<void> {
        const result = await this.profilesRepository.delete({ id, user });

        if (result.affected === 0) {
            throw new NotFoundException(`Profile with ID "${id}" not found`)
        }
    }

    // async updateProfile(
    //     id: string,
    // ): Promise<Profile> {
    //     const profile = await this.getProfileById(id);

    //     await this.profilesRepository.save(profile);

    //     return profile;
    // }
}