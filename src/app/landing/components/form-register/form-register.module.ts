import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  RouterModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatProgressSpinnerModule
]
import { FormRegisterComponent } from './form-register.component';


@NgModule({
  declarations: [FormRegisterComponent],
  imports: COMMON_MODULE,
  exports: [FormRegisterComponent]
})
export class FormRegisterModule { }
