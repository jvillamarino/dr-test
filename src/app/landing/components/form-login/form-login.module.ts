import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login.component';

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  RouterModule,
]

@NgModule({
  declarations: [FormLoginComponent],
  imports: COMMON_MODULE,
  exports:[FormLoginComponent]
})
export class FormLoginModule { }
