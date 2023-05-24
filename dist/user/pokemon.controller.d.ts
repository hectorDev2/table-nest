import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: any);
    create(createPokemonDto: CreatePokemonDto): any;
    findAll(): any;
    findOne(term: string): any;
    update(term: string, updatePokemonDto: UpdatePokemonDto): any;
    remove(id: string): any;
}
