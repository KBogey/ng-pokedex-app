import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./components/pokemon-detail/pokemon-detail.component";
import {BorderCardDirective} from "./style/border-card.directive";
import {PokemonTypeColorPipe} from "./style/pokemon-type-color.pipe";
import {PokemonService} from "./service/pokemon.service";

const pokemonRoutes: Routes = [
    {path: 'pokemons', component: PokemonListComponent},
    {path: 'pokemon/:id', component: PokemonDetailComponent},
];

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonDetailComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(pokemonRoutes)
    ],
    providers: [
        PokemonService
    ]
})
export class PokemonModule {
}
