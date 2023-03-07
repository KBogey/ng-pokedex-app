import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="hollowFont center red-text text-darken-3">Ajouter un pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit{
  pokemon!: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
