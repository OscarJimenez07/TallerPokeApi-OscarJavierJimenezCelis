
// OSCAR JAVIER JIMENEZ CELIS

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/pokeapi.service';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface PokemonResumen {
  name: string;
  url: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  pokemons: Pokemon[] = [];
  offset = 0;
  limit = 20;
  searchTerm: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.apiService.getPokemons(this.limit, this.offset).subscribe(data => {
      data.results.forEach((pokemon: PokemonResumen) => {
        this.apiService.getPokemonDetalles(pokemon.name).subscribe(Detalles => {
          this.pokemons.push({
            id: Detalles.id,
            name: pokemon.name,
            image: Detalles.sprites.front_default
          });
        });
      });
      this.offset += this.limit;  
    });
  }

  loadMore(event: any) {
    this.loadPokemons();
    event.target.complete();
  }

  search() {
    if (!this.searchTerm.trim()) {
      return;
    }
    const pokemonName = this.searchTerm.trim().toLowerCase();
    const foundPokemon = this.pokemons.find(pokemon => pokemon.name.toLowerCase() === pokemonName || pokemon.id.toString() === pokemonName);
    if (foundPokemon) {
      this.pokemons = [];
      this.pokemons.push(foundPokemon);
    }
  }

  verPokemonDetalles(pokemon: Pokemon) {
    this.router.navigate(['/detalle-pokemon', pokemon.id]);
  }

}
