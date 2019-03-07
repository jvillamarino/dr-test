import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVisitFormComponent } from './create-visit-form.component';

import { MatButtonModule } from '@angular/material/button';
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

@NgModule({
  declarations: [CreateVisitFormComponent],
  imports: COMMON_MODULE,
  exports:[CreateVisitFormComponent]
})
export class CreateVisitFormModule { }
