import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePokemonPageRoutingModule } from './detalle-pokemon-routing.module';

import { DetallePokemonPage } from './detalle-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePokemonPageRoutingModule
  ],
  declarations: [DetallePokemonPage]
})
export class DetallePokemonPageModule {}
