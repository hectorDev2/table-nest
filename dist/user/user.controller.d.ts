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
    remove(id: string): Promise<string>;
}
