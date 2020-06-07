import { VirtualScrollTableComponent } from './virtual-scroll-table/virtual-scroll-table.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'material-table'
  },
  {
    path: 'material-table',
    component: MaterialTableComponent,
  },
  {
    path: 'virtual-scroll-table',
    component: VirtualScrollTableComponent,
  },
  {
    path: '**', redirectTo: '/external/page-error-404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
