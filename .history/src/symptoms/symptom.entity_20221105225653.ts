/* eslint-disable prettier/prettier */
import { Exclude } from "class-transformer";
import { User } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Symptom {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    symptoms_name: string;

    @Column({type: "numeric"})
    mb_baby: number;

    @Column({type: "numeric"})
    mb_major: number;

    @Column({type: "numeric"})
    mb_psychosis: number;

    // @ManyToOne((_type) => User, (user) => user.symptoms, { eager: false })
    // @Exclude({ toPlainOnly: true })
    // user: User;
}