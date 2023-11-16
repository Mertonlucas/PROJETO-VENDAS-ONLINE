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









// Uma interface descreve um conjunto de assinaturas de métodos, ou seja, os nomes, os parâmetros e os 
// tipos de retorno dos métodos que uma classe pode implementar. <<
// No caso do user entity, a interface define uma entidade do TypeORM chamada UserEntity, 
// que >> mapeia uma tabela do banco de dados chamada user. A entidade tem os seguintes atributos: id, name, email, 
// phone, cpf, password, typeUser, createdat e updatedat. Cada atributo tem um tipo de dado, uma restrição de 
// nulidade e um decorador que indica como o atributo é mapeado para o banco de dados. A interface não define 
// como os atributos são armazenados, consultados ou modificados no banco de dados, apenas define a estrutura 
// da entidade.