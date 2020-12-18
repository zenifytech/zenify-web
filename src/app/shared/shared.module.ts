import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { ResultDialogComponent } from './dialog/result-dialog/result-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SpinnerComponent,
    ResultDialogComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    SpinnerComponent,
    DialogComponent,
    ResultDialogComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule
  ],

})
export class SharedModule { }
