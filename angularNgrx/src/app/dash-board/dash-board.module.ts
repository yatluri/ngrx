import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DashBoardRouteConfig } from './dash-board.route.config';

// components
import { DashBoardViewComponent } from './components/dash-board-view/dash-board-view.component';

@NgModule({
  declarations: [DashBoardViewComponent],
  imports: [SharedModule, DashBoardRouteConfig],
  exports: [SharedModule, DashBoardRouteConfig]
})
export class DashBoardModule {}
