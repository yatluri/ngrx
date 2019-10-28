import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// modules
const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./User/user.module').then(m => m.UserModule)
  },
  {
    path: 'dash-board',
    loadChildren: () =>
      import('./dash-board/dash-board.module').then(m => m.DashBoardModule)
  },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouteConfig {}
