import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

const routes:Routes=[
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
  ,
  {
    path:'home',
    component:HomeComponent
  }
  
  
];

@NgModule({
  declarations: [
    HomeComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
    
  ]
})
export class HomeModule { }
