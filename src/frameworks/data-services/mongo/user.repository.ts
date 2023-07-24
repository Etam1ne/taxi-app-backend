import { Model } from "mongoose";
import { User } from "./model";
import { MongoGenericRepository } from "./mongo-generic-repository";

export class UserRepository extends MongoGenericRepository<User> {
    constructor(_repository: Model<User>) {
        super(_repository)
    }

    public getByEmail(email: string): Promise<User> {
        return this._repository.findOne({ email }).exec();
    }
}