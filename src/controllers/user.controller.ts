import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDto } from '../core/dtos';
import { User } from '../core/entities';
import { UserUseCases } from '../use-cases/user/user.use-case';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}
  
  @Get(':id')
  getUserByEmail(@Param('id') id: string) {
    return this.userUseCases.getById(id);
  }
}
