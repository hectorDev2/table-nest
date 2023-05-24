import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
export declare class UserService {
    private readonly pokemonModel;
    constructor(pokemonModel: Model<Pokemon>);
    create(createPokemonDto: any): Promise<Pokemon & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(term: string): Promise<Pokemon>;
    update(term: string, updatePokemonDto: any): Promise<any>;
    remove(id: string): Promise<void>;
    private handleExceptions;
}
