import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: any;
  animal: any;
  constructor(public dialog: MatDialog) {}





    signUp(): void {
    const dialogRef = this.dialog.open(SignupComponent,{width:'46rem',height:'30rem'}
       );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
  
  }

  
  signIn(){

  }

}



