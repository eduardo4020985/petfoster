import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AnimalOngComponent } from './animal-ong/animal-ong.component'; 
import { AnimalCardsComponent } from './animal-cards/animal-cards.component';

import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: 'adotar', component: AnimalCardsComponent },
  { path: 'ong', component: AnimalOngComponent,canActivate: [AuthGuard] },
  
 /*  { path:'anamnese/:id', component: IndividualAnamneseComponent, canActivate: [AuthGuard]}, */
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
