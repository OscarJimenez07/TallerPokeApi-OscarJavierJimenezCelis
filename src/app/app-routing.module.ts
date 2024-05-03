import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full'
  },
  {
    path: 'listado',
    loadChildren: () => import('./inicio/listado/listado.module').then( m => m.ListadoPageModule)
  },
 
  {
    path: 'detalle-pokemon/:id',
    loadChildren: () => import('./inicio/detalle-pokemon/detalle-pokemon.module').then( m => m.DetallePokemonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
