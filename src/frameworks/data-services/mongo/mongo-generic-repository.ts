import { Model } from 'mongoose';
import { IGenericRepository } from '../../../core/abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  protected _repository: Model<T>;

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  public getAll(): Promise<T[]> {
    return this._repository.find();
  }

  public getById(id: string): Promise<T> {
    return this._repository.findById(id);
  }

  public create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  public update(id: string, item: T): Promise<T> {
    return this._repository.findByIdAndUpdate(id, item);
  }
}