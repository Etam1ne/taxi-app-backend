import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDto } from '../core/dtos';
import { User } from '../core/entities';
import { UserUseCases } from '../use-cases/user/user.use-case';

@Controller('user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userUseCases.create(createUserDto);
  }

  @Get(':email')
  getUserByEmail(@Param('email') email: string) {
    return this.userUseCases.getByEmail(email);
  }
}
