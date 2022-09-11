/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    phone: number;

    @Column()
    birht_place: string;

    @Type(() => Date)
    @Column('text')
    date: Date;

    @Column()
    gender: string;

    @Column()
    profession: string;

    @Column()
    study_level: string;
}