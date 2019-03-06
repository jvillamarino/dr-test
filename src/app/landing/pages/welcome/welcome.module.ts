import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePages } from './welcome.pages';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { BrandBarModule } from '../../components/brand-bar/brand-bar.module';



const routes:Routes = [
  { path:'', pathMatch:'full', component: WelcomePages }
]

const COMMON_MODULE= [
  RouterModule.forChild(routes),
  FlexLayoutModule,
  CommonModule,
  BrandBarModule
]

@NgModule({
  declarations: [WelcomePages],
  imports: COMMON_MODULE,
  exports:[RouterModule]
})
export class WelcomeModule { }
