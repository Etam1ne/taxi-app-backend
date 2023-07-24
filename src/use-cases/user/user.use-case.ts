import { Injectable, NotFoundException } from '@nestjs/common';
import { IDataServices } from '../../core/abstract';
import { UserFactoryService } from './user-factory.service';
import { CreateUserDto } from '../../core/dtos';
import { User } from '../../core/entities';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  public create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);

    return this.dataServices.users.create(user);
  }

  public async getById(id: string): Promise<User> {
    const user: User = await this.dataServices.users.getById(id);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  public async getByEmail(email: string): Promise<User> {
    const user: User = await this.dataServices.users.getByEmail(email);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }
}
