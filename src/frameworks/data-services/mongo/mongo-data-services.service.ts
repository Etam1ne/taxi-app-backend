import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDataServices } from 'src/core/abstract';
import { User, UserDocument } from './model';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './mongo-generic-repository';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: MongoGenericRepository<User>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
  }
}
