import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core/abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  getById(id: string): Promise<T> {
    return this._repository.findById(id);
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: T): Promise<T> {
    return this._repository.findByIdAndUpdate(id, item);
  }
}
