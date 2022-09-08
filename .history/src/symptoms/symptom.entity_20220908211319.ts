/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Symptom {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    symptoms_name: string;
}