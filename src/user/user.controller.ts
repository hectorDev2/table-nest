import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }


  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe ) id: string) {
    return this.userService.remove( id );
  }
}
