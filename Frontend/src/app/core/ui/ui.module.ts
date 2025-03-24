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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

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
    NgxMaskDirective,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
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
    MatSlideToggleModule,
    MatFormFieldModule,
    MatMenuModule,
    MatFormField,
    NgxMaskDirective,
    MatButtonToggleModule,
    NgxLoadingButtonsModule,
    MatPaginatorModule
  ],
  providers: [provideNgxMask()]
})
export class UiModule { }
