import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../service/pokemon.service";

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <div *ngIf="pokemon">
        <h2  class="center red-text text-darken-3">Éditer {{pokemon?.name}}</h2>
            <p class="center">
                <img [src]="pokemon.picture" alt="{{pokemon.name}}"/>
            </p>
            <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </div>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit{
  pokemon?: Pokemon;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
