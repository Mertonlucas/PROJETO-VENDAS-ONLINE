import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';
import { UserEntity } from './interface/user.entity';

@Injectable()
export class UserService {

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const saltOrRounds = 10;

        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        const user: UserEntity = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHashed, 
        };

        this.users.push(user);

        return user; 
    }

    async getAllUser(): Promise<UserEntity[]> {
        return this.users;
    }
}