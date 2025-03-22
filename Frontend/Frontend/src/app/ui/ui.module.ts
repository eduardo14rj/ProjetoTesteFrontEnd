import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbButtonDirective } from './button';
import { UbDialogCloseDirective, UbDialogContentDirective, UbDialogDescriptionDirective, UbDialogFooterDirective, UbDialogHeaderDirective, UbDialogTitleDirective, UbDialogTriggerDirective } from './dialog';
import { UbInputDirective } from './input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UbButtonDirective,
    UbInputDirective,

    UbDialogCloseDirective,
    UbDialogContentDirective,
    UbDialogDescriptionDirective,
    UbDialogFooterDirective,
    UbDialogHeaderDirective,
    UbDialogTitleDirective,
    UbDialogTriggerDirective
  ],
  exports: [
    UbButtonDirective,
    UbInputDirective,

    UbDialogCloseDirective,
    UbDialogContentDirective,
    UbDialogDescriptionDirective,
    UbDialogFooterDirective,
    UbDialogHeaderDirective,
    UbDialogTitleDirective,
    UbDialogTriggerDirective
  ]
})
export class UiModule { }
