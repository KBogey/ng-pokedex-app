import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./components/pokemon-detail/pokemon-detail.component";
import {BorderCardDirective} from "./style/border-card.directive";
import {PokemonTypeColorPipe} from "./style/pokemon-type-color.pipe";
import {PokemonService} from "./service/pokemon.service";
import {FormsModule} from "@angular/forms";
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
    { path: 'edit/pokemon/:id', component: EditPokemonComponent },
    {path: 'pokemons', component: PokemonListComponent },
    {path: 'pokemon/:id', component: PokemonDetailComponent },
];

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonDetailComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonFormComponent,
        EditPokemonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(pokemonRoutes)
    ],
    providers: [
        PokemonService
    ]
})
export class PokemonModule {
}
