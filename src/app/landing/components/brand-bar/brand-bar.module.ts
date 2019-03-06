import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandBarComponent } from './brand-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const COMMON_MODULES = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  FlexLayoutModule,
  RouterModule,
  MatIconModule
]

@NgModule({
  declarations: [BrandBarComponent],
  imports: COMMON_MODULES,
  exports: [BrandBarComponent]
})
export class BrandBarModule { }
