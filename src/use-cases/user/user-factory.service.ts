import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../core/dtos';
import { User } from '../../core/entities';

@Injectable()
export class UserFactoryService {
  public createNewUser(createUserDto: CreateUserDto): User {
    const newUser: User = { ...createUserDto }
    
    return newUser;
  }
}
