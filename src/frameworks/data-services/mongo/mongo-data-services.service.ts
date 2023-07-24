import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDataServices } from '../../../core/abstract';
import { User, UserDocument } from './model';
import { Model } from 'mongoose';
import { UserRepository } from './user.repository';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: UserRepository;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
  ) {}

  onApplicationBootstrap() {
    this.users = new UserRepository(this.UserRepository);
  }
}
