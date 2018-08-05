import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationSubject = new Subject<NotificationMessage>();

  constructor(private toastr: ToastrService) { }

  notify(notificationMessage: NotificationMessage) {
      switch (notificationMessage.options.notificationType) {
        case NotificationType.SUCCESS:
          this.toastr.success(notificationMessage.message, notificationMessage.heading, notificationMessage.options.config);
        break;
        case NotificationType.ERROR:
          this.toastr.error(notificationMessage.message, notificationMessage.heading, notificationMessage.options.config);
        break;
        default:
          this.toastr.info(`Unsupported message type: ${notificationMessage.options.notificationType}`);
        break;
    }
  }
}

export class NotificationMessage {
  message: string;
  heading: string;
  options: ToastrOptions;
}

export class ToastrOptions {
  notificationType: NotificationType;
  config?: Partial<IndividualConfig>;
}

export enum NotificationType {
  SUCCESS,
  ERROR
}
