import { Component } from '@angular/core';

@Component({
  selector: 'page-404',
  template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="clefairy"/>
      <h1 class="red-text text-darken-3">Oups, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat amber-text text-lighten-1">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }