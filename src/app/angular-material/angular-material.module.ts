import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';









@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    
    
    
    
  ],
  exports:[
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule
    

    

  ]
})
export class AngularMaterialModule { }
