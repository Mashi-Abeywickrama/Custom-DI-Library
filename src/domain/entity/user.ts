import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"
import {
    IsEmail} from "class-validator"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column()
    @IsEmail()
    @Index({ unique: true })
    email: string
}