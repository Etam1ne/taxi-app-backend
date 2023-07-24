import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../core/dtos';
import { User } from '../../core/entities';
import { randomUUID } from 'crypto';
import { hash } from 'bcrypt';

@Injectable()
export class UserFactoryService {
  public async createNewUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser: User = { 
      ...createUserDto, 
      _id: randomUUID(),
      password: await hash(createUserDto.password, 5),
    }
    
    return newUser;
  }
}
