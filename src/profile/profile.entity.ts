/* eslint-disable prettier/prettier */
import { Exclude, Type } from "class-transformer";
import { User } from "src/auth/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProfileGender, ProfileProfession, ProfileStudyLevel } from "./profile.enum";

@Entity()
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
    phone: string;

    @Type(() => Date)
    @Column('text')
    birth_date: Date;

    @Column()
    gender: string;

    @Column()
    age: number;

    @OneToOne((_type) => User, (user) => user.profile, { eager: false })
    @JoinColumn()
    user: User;
}