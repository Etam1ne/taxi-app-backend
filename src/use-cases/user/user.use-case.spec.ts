import { NotFoundException } from "@nestjs/common";
import { IDataServices } from "../../core/abstract";
import { UserFactoryService } from "./user-factory.service";
import { UserUseCases } from "./user.use-case"
import { userMock } from "../../../test/mocks";

describe('UserUserCases', () => {
    let userUseCases: UserUseCases;
    let dataServices: IDataServices;
    let userFactoryService: UserFactoryService;

    beforeEach(() => {
        dataServices = {
          users: {
            create: jest.fn(),
            getById: jest.fn(),
            getByEmail: jest.fn(),
            getAll: jest.fn(),
            update: jest.fn(),
          },
        };
        userFactoryService = new UserFactoryService();
        userUseCases = new UserUseCases(dataServices, userFactoryService);
      });
    
      describe('create', () => {
        it('should create a new user', async () => {
          const { _id, ...createUserDto } = userMock;
          const userFactoryMock = jest
            .spyOn(userFactoryService, 'createNewUser')
            .mockResolvedValue(userMock);

          const createUserMock = jest
            .spyOn(dataServices.users, 'create')
            .mockResolvedValue(userMock);
    
          const result = await userUseCases.create(createUserDto);
    
          expect(createUserMock).toHaveBeenCalledWith(userMock);
          expect(userFactoryMock).toHaveBeenCalledWith(createUserDto);
          expect(result).toBe(userMock);
        });
      });
    
      describe('getById', () => {
        it('should return a user by ID if found', async () => {
          const getUserMock = jest
            .spyOn(dataServices.users, 'getById')
            .mockResolvedValue(userMock);
    
          const result = await userUseCases.getById(userMock._id);
    
          expect(getUserMock).toHaveBeenCalledWith(userMock._id);
          expect(result).toBe(userMock);
        });
    
        it('should throw NotFoundException when user is not found', async () => {
          const getUserMock = jest
            .spyOn(dataServices.users, 'getById')
            .mockResolvedValue(null);

          expect(userUseCases.getById(userMock._id)).rejects.toThrowError(NotFoundException);
          expect(getUserMock).toBeCalledWith(userMock._id);
        });
      });
    
      describe('getByEmail', () => {
        it('should return a user by email if found', async () => {
          const getUserMock = jest
            .spyOn(dataServices.users, 'getByEmail')
            .mockResolvedValue(userMock);
    
          const result = await userUseCases.getByEmail(userMock.email);
    
          expect(getUserMock).toHaveBeenCalledWith(userMock.email);
          expect(result).toBe(userMock);
        });
      });
})