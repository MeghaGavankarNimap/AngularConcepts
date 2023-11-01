import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'signUp',
    component:SignupComponent
  }
]
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
   
  ]
})
export class SignupModule { }
