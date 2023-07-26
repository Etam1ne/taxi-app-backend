# About
This is my educational project built with NestJS. The main purpose was to practice in building REST APIs with nestjs, Mongodb as main database, Mongoose, Jwt as an auth strategy. Testing with jest and api documentation with swagger. Also trying to implement Clean Architecture.
### Technologies used:
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![JWT](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

### Structure
```
├───src
│   ├───controllers
│   ├───core
│   │   ├───abstract
│   │   ├───dtos
│   │   ├───entities
│   │   ├───guards
│   │   └───interfaces
│   ├───frameworks
│   │   └───data-services
│   │       └───mongo
│   │           └───model
│   ├───services
│   │   └───data-services
│   └───use-cases
│       ├───auth
│       │   └───strategies
│       └───user
└───test
    └───mocks
```
