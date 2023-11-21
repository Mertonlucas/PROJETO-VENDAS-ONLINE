import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}









//define um módulo do NestJS chamado UserModule, que importa o TypeOrmModule para se 
//conectar com uma entidade do banco de dados chamada UserEntity, e registra um controlador chamado 
//UserController e um serviço chamado UserService, 
//que são responsáveis por lidar com as requisições e a lógica de negócio relacionadas aos usuários.