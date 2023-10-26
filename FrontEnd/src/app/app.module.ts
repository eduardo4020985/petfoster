import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms'; 

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { NgChartsModule } from 'ng2-charts';
import { RegisterComponent } from './register/register.component';
import { AnimalOngComponent } from './animal-ong/animal-ong.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { AnimalCardsComponent } from './animal-cards/animal-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AnimalOngComponent,
    AnimalEditComponent,
    AnimalCardsComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgChartsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
