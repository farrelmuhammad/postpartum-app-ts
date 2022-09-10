/* eslint-disable prettier/prettier */
// import { Task } from "src/tasks/task.entity";
import { Symptom } from "src/symptoms/symptom.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    // @Column()
    // email: string;
    
    // @OneToMany((_type) => Symptom, (symptom) => symptom.user, { eager: true })
    // symptoms: Symptom[];
}