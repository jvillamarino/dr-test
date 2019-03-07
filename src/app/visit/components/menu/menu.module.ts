import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule
]

@NgModule({
  declarations: [MenuComponent],
  imports: COMMON_MODULE,
  exports:[MenuComponent]
})
export class MenuModule { }
