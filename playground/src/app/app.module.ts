import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisableFieldsModule } from './disable-fields/disable-fields.module';
import { ReactiveModule } from './reactive/reactive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DisableFieldsModule,
    ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
