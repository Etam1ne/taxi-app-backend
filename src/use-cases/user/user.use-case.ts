import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstract';
import { UserFactoryService } from './user-factory.service';
import { CreateUserDto } from 'src/core/dtos';
import { User } from 'src/core/entities';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);

    return this.dataServices.users.create(user);
  }
}
