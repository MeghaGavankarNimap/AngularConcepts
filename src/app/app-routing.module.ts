import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
		path: '', loadChildren: () => import('../app/core/core/core.module').then(m => m.CoreModule),
		canActivate: []
	},
  {
		path: 'view', loadChildren: () => import('../app/view/view.module').then(m => m.ViewModule),
		canActivate: [],
	},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
