import { FormRegisterModule } from './../../components/form-register/form-register.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPages } from './register.pages';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes:Routes = [
  {path:'', pathMatch:'full', component:RegisterPages}
]

const COMMON_MODULE = [
  CommonModule,
  RouterModule.forChild(routes),
  FlexLayoutModule,
  FormRegisterModule
]

@NgModule({
  declarations: [RegisterPages],
  imports: COMMON_MODULE
})
export class RegisterModule { }
