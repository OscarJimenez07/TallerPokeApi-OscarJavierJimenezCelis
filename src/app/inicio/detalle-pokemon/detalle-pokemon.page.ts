
// OSCAR JAVIER JIMENEZ CELIS

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.page.html',
  styleUrls: ['./detalle-pokemon.page.scss'],
})
export class DetallePokemonPage implements OnInit {
  pokemonId: string | null = null;
  pokemonDetalles: any; 

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    if (this.pokemonId) {
      this.apiService.getPokemonDetalles(this.pokemonId).subscribe(Detalles => {
        this.pokemonDetalles = Detalles;
      });
    }
  }
}


