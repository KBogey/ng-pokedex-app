import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../service/pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: []
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
          .subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
        .subscribe(() => this.goToPokemonList());
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

}
