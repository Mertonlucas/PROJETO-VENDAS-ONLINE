//define uma entidade do TypeORM chamada UserEntity, que mapeia uma tabela do 
//banco de dados chamada user. A entidade tem os seguintes atributos:
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user'})
export class UserEntity {
    @PrimaryGeneratedColumn('rowid') //gerada automaticamente pelo tipo rowid.
    id: number;

    @Column({ name: 'name', nullable: false})
    name: string;

    @Column({ name: 'email', nullable: false})
    email: string;

    @Column({ name: 'phone'})
    phone: string;

    @Column({ name: 'cpf', nullable: false})
    cpf: string;

    @Column({ name: 'password', nullable: false})
    password: string;

    @Column({ name: 'type_user', nullable: false})
    typeUser: number;

    @CreateDateColumn()
    createdat: Date;  

    @UpdateDateColumn()
    updatedat: Date;
}