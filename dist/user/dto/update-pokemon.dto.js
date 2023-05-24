"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pokemon_dto_1 = require("./create-pokemon.dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_pokemon_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-pokemon.dto.js.map