import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { NgIconsModule } from '@ng-icons/core';
import { SharedModule } from './shared/shared.module';
import * as lucideIcons from '@ng-icons/lucide';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UiModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons(lucideIcons),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
