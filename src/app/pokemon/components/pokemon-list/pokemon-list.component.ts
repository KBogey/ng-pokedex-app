import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Pokemon } from "../../models/pokemon";
import { PokemonService } from "../../service/pokemon.service";


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: [
  ]
})
export class PokemonListComponent {
  pokemonList?: Pokemon[];

  constructor(
      private router: Router,
      private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList()
        .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id ]);
  }
}
