import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos';
import { User } from 'src/core/entities';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser: User = { ...createUserDto };

    return newUser;
  }
}
