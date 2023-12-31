import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { ReturnUserDto } from './dto/return.User.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (UserEntity) => new ReturnUserDto(UserEntity),
    );
  }
}
// define um controlador do NestJS chamado UserController, que usa o UserService para lidar com as requisições
// relacionadas aos usuários. O controlador tem dois métodos:
// createUser(@Body() createUser: CreateUserDto): Esse método recebe um objeto createUser do tipo CreateUserDto
// no corpo da requisição e usa o userService.createUser(createUser) para criar um novo usuário no banco de dados.
// O método retorna uma promessa que resolve para uma entidade do usuário criado.
// getAllUser(): Esse método não recebe nenhum parâmetro e usa o userService.getAllUser() para buscar todos os
//usuários do banco de dados. O método retorna uma promessa que resolve para um array de entidades de usuário.
