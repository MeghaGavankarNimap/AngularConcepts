import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepicker } from '@angular/material/datepicker';




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
    RouterModule.forChild(routes),
    AngularMaterialModule,
    
    
    
    
   
  ]
})
export class SignupModule { }
