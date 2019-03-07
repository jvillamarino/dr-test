import { MenuModule } from './../components/menu/menu.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitLayout } from './visit.layout';


const routes: Routes = [
  {
    path: '', component: VisitLayout, children: [
      { path: '', pathMatch: 'full', redirectTo: 'add' },
      { path:'add', loadChildren:'../pages/create-visit/create-visit.module#CreateVisitModule'}
    ]
  }
]

const COMMON_MODULE = [
  CommonModule,
  RouterModule.forChild(routes),
  MenuModule,
]

@NgModule({
  declarations: [VisitLayout],
  imports: COMMON_MODULE,
})
export class VisitModule { }
