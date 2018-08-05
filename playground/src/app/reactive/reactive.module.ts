import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification-component/notification/notification.component';
import { NotificationService } from './notification-service/notification.service';
import { ExternalLibrariesModule } from '../external-libraries/external-libraries.module';

@NgModule({
  imports: [
    CommonModule,
    ExternalLibrariesModule
  ],
  providers: [NotificationService],
  declarations: [NotificationComponent],
  exports: [NotificationComponent]
})
export class ReactiveModule { }
