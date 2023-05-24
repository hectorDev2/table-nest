import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(term: string, updatePokemonDto: any): Promise<void>;
    remove(id: string): Promise<string>;
    private handleExceptions;
}
