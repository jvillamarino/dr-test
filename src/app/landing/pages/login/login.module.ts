import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginPages } from './login.pages';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginPages }
]

const COMMON_MODULE = [
  FlexLayoutModule,
  CommonModule,
  RouterModule.forChild(routes),

  ReactiveFormsModule
]


@NgModule({
  declarations: [LoginPages],
  imports: COMMON_MODULE
})
export class LoginModule { }
