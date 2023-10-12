import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;

        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        const user: User = {
            ...createUserDto,
            id: this.users.length + 1,
            Password: passwordHashed, 
        };

        this.users.push(user);

        return user; 
    }

    async getAllUser(): Promise<User[]> {
        return this.users;
    }
}