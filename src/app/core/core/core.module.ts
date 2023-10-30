import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '', loadChildren: () => import('../../core/home/home.module').then(m => m.HomeModule),
    canActivate: [],
	},
  {
		path: 'signUp', loadChildren: () => import('../../core/signup/signup.module').then(m => m.SignupModule),
		canActivate: []
	},
  {
		path: 'signIn', loadChildren: () => import('../../core/signin/signin.module').then(m => m.SigninModule),
		canActivate: []
	},
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
