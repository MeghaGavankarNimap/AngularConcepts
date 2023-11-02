import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



const routes:Routes=[
  {
    path:'',loadChildren: ()=> import('../../app/core/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'sign-up',loadChildren: ()=> import('../../app/core/signup/signup.module').then(m=>m.SignupModule)
  },
  {
    path:'sign-in',loadChildren:()=> import('../../app/core/signin/signin.module').then(m=>m.SigninModule)
  }
  
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class CoreModule { }
