/* eslint-disable prettier/prettier */
// import { Task } from "src/tasks/task.entity";
import { Profile } from "src/profile/profile.entity";
import { Symptom } from "src/symptoms/symptom.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user-role.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({default: UserRole.USER})
    role: UserRole;
    
    @OneToOne((_type) => Profile, (profile) => profile.user, { eager: true })
    profile: Profile;
}