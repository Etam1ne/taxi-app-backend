import { IDataServices } from "src/core/abstract";
import { UserFactoryService } from "./user-factory.service";
import { UserUseCases } from "./user.use-case"
import { CreateUserDto } from "src/core/dtos";


describe('UserUserCases', () => {
    let userUseCases: UserUseCases;
    let dataServices: IDataServices;
    let userFactoryService: UserFactoryService;

    beforeEach(() => {
        // Mocking the dependencies
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
            
          dataServices.users.create.mockResolvedValue(createdUser);
    
          // Call the create method
          const result = await userUseCases.create(createUserDto);
    
          // Assertions
          expect(dataServices.users.create).toHaveBeenCalledWith(expect.any(User));
          expect(result).toBe(createdUser);
        });
      });
    
      describe('getById', () => {
        it('should return a user by ID if found', async () => {
          // Mock the dependencies' behavior
          const userId = '123456789'; // Provide a valid user ID
          const user: User = {
            // Provide the necessary data for a user
          };
    
          dataServices.users.getById.mockResolvedValue(user);
    
          // Call the getById method
          const result = await userUseCases.getById(userId);
    
          // Assertions
          expect(dataServices.users.getById).toHaveBeenCalledWith(userId);
          expect(result).toBe(user);
        });
    
        it('should throw NotFoundException when user is not found', async () => {
          // Mock the dependencies' behavior
          const userId = 'nonExistentId'; // Provide an ID that doesn't exist in the database
    
          dataServices.users.getById.mockResolvedValue(null);
    
          // Call the getById method and expect it to throw NotFoundException
          await expect(userUseCases.getById(userId)).rejects.toThrowError(NotFoundException);
        });
      });
    
      describe('getByEmail', () => {
        it('should return a user by email if found', async () => {
          // Mock the dependencies' behavior
          const userEmail = 'test@example.com'; // Provide a valid user email
          const user: User = {
            // Provide the necessary data for a user
          };
    
          dataServices.users.getByEmail.mockResolvedValue(user);
    
          // Call the getByEmail method
          const result = await userUseCases.getByEmail(userEmail);
    
          // Assertions
          expect(dataServices.users.getByEmail).toHaveBeenCalledWith(userEmail);
          expect(result).toBe(user);
        });
    
        it('should throw NotFoundException when user is not found', async () => {
          // Mock the dependencies' behavior
          const userEmail = 'nonexistent@example.com'; // Provide an email that doesn't exist in the database
    
          dataServices.users.getByEmail.mockResolvedValue(null);
    
          // Call the getByEmail method and expect it to throw NotFoundException
          await expect(userUseCases.getByEmail(userEmail)).rejects.toThrowError(NotFoundException);
        });
      });
})