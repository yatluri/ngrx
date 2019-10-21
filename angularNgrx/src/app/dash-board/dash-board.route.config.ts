import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DashBoardViewComponent } from './components/dash-board-view/dash-board-view.component';

const routes: Routes = [
  { path: 'dash-board-view', component: DashBoardViewComponent },
  {
    path: '**',
    redirectTo: 'dash-board-view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRouteConfig {}
