/* eslint-disable prettier/prettier */
import { Exclude } from "class-transformer";
import { User } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Solution {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    solution: string;

    // @ManyToOne((_type) => User, (user) => user.symptoms, { eager: false })
    // @Exclude({ toPlainOnly: true })
    // user: User;
}