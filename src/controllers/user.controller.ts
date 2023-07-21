import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos';
import { UserUseCases } from 'src/use-cases/user/user.use-case';

@Controller('user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Post()
  createAuthor(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.createUser(createUserDto);
  }
}
