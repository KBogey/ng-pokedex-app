import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {POKEMONS} from "../models/mock-pokemon-list";

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  };

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  };

  getPokemonTypeList(): string[] {
    return [
        'Plante',
      'Feu',
      'Eau',
      'Poison',
      'Insecte',
      'Normal',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
      'Electrik'
    ];
  };
}
