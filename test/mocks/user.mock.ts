import { User } from "../../src/core/entities";
import { faker } from "@faker-js/faker";

export const userMock: User = {
    email: faker.internet.email(),
    name: faker.person.firstName(),
}