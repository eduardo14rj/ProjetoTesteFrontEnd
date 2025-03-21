import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbButtonDirective } from './button';
import { UbDialogCloseDirective, UbDialogContentDirective, UbDialogDescriptionDirective, UbDialogFooterDirective, UbDialogHeaderDirective, UbDialogTitleDirective, UbDialogTriggerDirective } from './dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UbButtonDirective,

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
