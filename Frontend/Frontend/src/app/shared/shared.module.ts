import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NgIconsModule } from '@ng-icons/core';
import * as lucideIcons from '@ng-icons/lucide';
import { UiModule } from '@/ui/ui.module';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    NgIconsModule.withIcons(lucideIcons)
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedModule { }