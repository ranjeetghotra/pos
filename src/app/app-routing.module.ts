import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'watch-list',
    pathMatch: 'full'
  },
  {
    path: 'watch-list',
    loadChildren: () => import('./pages/watch-list/watch-list.module').then( m => m.WatchListPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./pages/graph/graph.module').then( m => m.GraphPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
