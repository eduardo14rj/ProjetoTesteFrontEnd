import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormField, MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons'
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatFormField,
    MatIconButton,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    NgxLoadingButtonsModule,
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatIconButton,
    MatFormFieldModule,
    MatMenuModule,
    MatFormField,
    MatButtonToggleModule,
    NgxLoadingButtonsModule,
    MatPaginatorModule
  ]
})
export class UiModule { }
