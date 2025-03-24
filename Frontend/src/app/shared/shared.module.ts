import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import * as lucideIcons from '@ng-icons/lucide';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons(lucideIcons)
  ],
  exports: [
  ]
})
export class SharedModule { }