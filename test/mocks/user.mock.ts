import { User } from "../../src/core/entities";
import { faker } from "@faker-js/faker";

export const userMock: User = {
    _id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.firstName(),
    password: faker.internet.password(),
}