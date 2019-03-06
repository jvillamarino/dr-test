import { BrandBarModule } from './../components/brand-bar/brand-bar.module';
import { Layout } from './layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'', component:Layout, children:[
    {path:'', pathMatch:'full', redirectTo:'login'},
    {path:'login', loadChildren:'../pages/login/login.module#LoginModule'},
    {path:'register', loadChildren:'../pages/register/register.module#RegisterModule'}
  ]}
]

const COMMON_MODULE = [
  CommonModule,
  RouterModule.forChild(routes),
  BrandBarModule
]

@NgModule({
  declarations: [Layout],
  imports: COMMON_MODULE
})
export class LayoutModule { }
