import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const COMMON_MODULE = [
  BrowserAnimationsModule,
  BrowserModule,
  AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  MatSnackBarModule
]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: COMMON_MODULE,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
