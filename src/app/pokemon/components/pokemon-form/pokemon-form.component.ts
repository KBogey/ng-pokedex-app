import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../../service/pokemon.service";
import {Pokemon} from "../../models/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input()
  pokemon: Pokemon = new Pokemon;
  types: string[] = [];

  constructor(
      private pokemonService: PokemonService,
      private router: Router
  ) {}

  ngOnInit() {
    //pokemon type list
    this.types = this.pokemonService.getPokemonTypeList();
  }

  //précocher les types
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  //changer les types
  selectType($event: Event, type:string) {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  //validation des types
  isTypesValid(type: string): boolean {
    return !((this.pokemon.types.length == 1 && this.hasType(type)) || (this.pokemon.types.length > 2 && !this.hasType(type)));

  }

  //soumettre le form
  onSubmit() {
    console.log('Submit form !');
    this.router.navigate(["/pokemon", this.pokemon.id]);

  }
}
