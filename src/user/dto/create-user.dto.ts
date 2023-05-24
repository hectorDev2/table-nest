import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateUserDto {

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{8}$/)
    dni: string;
}
