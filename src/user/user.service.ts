import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { hash } from 'bcrypt';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

//Injetando classe PROVEDORA ou seja, se eu quiser utilizar UserService em outro serviço basta eu marca-lo com @Injectable
// Assim, eu posso usar os métodos do UserService no outro serviço.
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHashed,
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
        throw new NotFoundException(`userId: ${userId} not found.`);
    }
    return user;
  }
}

//define um serviço no NestJS chamado UserService, que tem duas funções principais: createUser e getAllUser.
//esse serviço cria um novo usuário com senha criptografada e recupera todos os usuários do banco de dados
