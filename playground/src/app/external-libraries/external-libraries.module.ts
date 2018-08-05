import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [],
  providers: [ToastrService],
  exports: [ToastrModule, BrowserAnimationsModule]
})
export class ExternalLibrariesModule { }
