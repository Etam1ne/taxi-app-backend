import { User } from "../entities";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IUserRepository extends IGenericRepository<User> {
    abstract getByEmail(email: string): Promise<User>;
}