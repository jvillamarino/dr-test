import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch: 'full', loadChildren:'./landing/pages/welcome/welcome.module#WelcomeModule'},
  { path: 'login', loadChildren:'./landing/pages/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
