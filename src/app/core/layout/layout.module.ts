import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreLayout } from './layout.layout';

import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [{
  path: '', component: CoreLayout, pathMatch:'full'
}]

// children: [
//   { path: '', pathMatch: '', redirectTo: 'register' },
//   { path: 'register', loadChildren: '' }
// ]

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  RouterModule.forChild(routes)
]

@NgModule({
  declarations: [CoreLayout],
  imports: COMMON_MODULE,
  exports: [CoreLayout]
})
export class LayoutModule { }
