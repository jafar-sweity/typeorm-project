import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    username: string
    @Column({ nullable: false })
    password: string
    @CreateDateColumn()
    creatAt: Date
    @Column({
        unique: true,
        nullable: false
    })
    email: string
}