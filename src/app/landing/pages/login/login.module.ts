import { BrandBarModule } from './../../components/brand-bar/brand-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginPages } from './login.pages';
import { FormLoginModule } from '../../components/form-login/form-login.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginPages }
]

const COMMON_MODULE = [
  FlexLayoutModule,
  CommonModule,
  RouterModule.forChild(routes),
  FormLoginModule,
  BrandBarModule,

]


@NgModule({
  declarations: [LoginPages],
  imports: COMMON_MODULE
})
export class LoginModule { }
