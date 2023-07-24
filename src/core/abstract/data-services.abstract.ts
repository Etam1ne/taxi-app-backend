import { IUserRepository } from './user-repository.abstract';

export abstract class IDataServices {
  abstract users: IUserRepository;
}
