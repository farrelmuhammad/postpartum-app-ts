/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProfileGender, ProfileProfession, ProfileStudyLevel } from "./profile.enum";

export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    province: string;

    @Column()
    phone: number;

    @Column()
    birth_place: string;

    @Type(() => Date)
    @Column('text')
    birth_date: Date;

    @Column()
    gender: ProfileGender;

    @Column()
    profession: ProfileProfession;

    @Column()
    study_level: ProfileStudyLevel;
}