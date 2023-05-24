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

  // @Get(':term')
  // findOne(@Param('term') term: string) {
  //   return this.userService.findOne( term );
  // }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updatePokemonDto: any) {
    return this.userService.update( term, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe ) id: string) {
    return this.userService.remove( id );
  }
}
