import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

// import { CreatePokemonDto } from './dto/create-pokemon.dto';
// import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class UserService {

  constructor(
    
    @InjectModel( User.name )
    private readonly userModel: Model<User>,

  ) {}


  async create(createUserDto: CreateUserDto) {
    createUserDto.name = createUserDto.name.toLocaleLowerCase();
    console.log(createUserDto,'dto');
    try {
      const user = await  this.userModel.create(createUserDto );
      return user;
    } catch (error) {
      this.handleExceptions( error );
    }
  }



  findAll() {
    return this.userModel.find().exec();
  }



  async update( term: string, updatePokemonDto: any) {

  
  }

  async remove( id: string) {
    // const pokemon = await this.findOne( id );
    // await pokemon.deleteOne();
    // return { id };
    // const result = await this.pokemonModel.findByIdAndDelete( id );
    const { deletedCount } = await this.userModel.deleteOne({ _id: id });
    if ( deletedCount === 0 )
      throw new BadRequestException(`Pokemon with id "${ id }" not found`);

    return;
  }


  private handleExceptions( error: any ) {

    if ( error.code === 11000 ) {
      throw new BadRequestException(`Pokemon exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`);
  }

}
