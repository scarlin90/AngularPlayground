import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisableFieldsModule } from './disable-fields/disable-fields.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DisableFieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
