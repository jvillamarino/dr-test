import { AuthGuard } from './shared/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path:'app', pathMatch: 'full', loadChildren:'./landing/pages/welcome/welcome.module#WelcomeModule'},
  { path: '', pathMatch:'full', redirectTo:'app'},
  { path: 'authentication', loadChildren:'./landing/layout/layout.module#LayoutModule'},
  { path: 'app', loadChildren:'./core/layout/core.module#CoreLayoutModule', canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
