import { CreateVisitFormModule } from './../../components/create-visit-form/create-visit-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateVisitPages } from './create-visit.pages';

const routes:Routes =[
  {path:'', pathMatch:'full', component:CreateVisitPages }
]
const COMMON_MODULE=[
  RouterModule.forChild(routes),
  CommonModule,
  CreateVisitFormModule,
  FlexLayoutModule
]

@NgModule({
  declarations: [CreateVisitPages],
  imports:COMMON_MODULE,

})
export class CreateVisitModule { }
