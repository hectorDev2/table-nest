import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(term: string, updatePokemonDto: any): Promise<void>;
    remove(id: string): Promise<void>;
}
