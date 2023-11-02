
import {Component, Inject} from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm!:FormGroup
  constructor(
    public fb:FormBuilder,
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}


  ngOnInit(){
    this.signUp()
   
  }

  signUp(){
    this.signUpForm=this.fb.group({
    firstname:['',Validators.compose([Validators.required])] ,
     middlename:['',Validators.compose([Validators.required])],
     lastname:['',Validators.compose([Validators.required])],
     gender:['',Validators.compose([Validators.required])],
     picker:['',Validators.compose([Validators.required])],
     address:['',Validators.compose([Validators.required])],
     state:['',Validators.compose([Validators.required])],
     city:['',Validators.compose([Validators.required])],
     pincode:['',Validators.compose([Validators.required])],
     mobile:['',Validators.compose([Validators.required])],





    }) 

  }

  get firstname(){
    return this.signUpForm.get('firstname')
  }

  get middlename(){
    return this.signUpForm.get('middlename')
  }
  get lastname(){
    return this.signUpForm.get('lastname')
  }
  get gender(){
    return this.signUpForm.get('firstname')
  }
  get picker(){
    return this.signUpForm.get('firstname')
  }

  get address(){
    return this.signUpForm.get('firstname')
  }
  get state(){
    return this.signUpForm.get('firstname')
  }
  get city(){
    return this.signUpForm.get('firstname')
  }
  
  get pincode(){
    return this.signUpForm.get('firstname')
  }
  
  get mobile(){
    return this.signUpForm.get('firstname')
  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

}
