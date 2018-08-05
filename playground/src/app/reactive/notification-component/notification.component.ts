import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { NotificationService, NotificationType } from '../notification-service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

  constructor(private notificationService: NotificationService) { }

  ngOnDestroy(): void {
    this.notificationService.notificationSubject.unsubscribe();
  }

  ngOnInit() {
    this.notificationService.notificationSubject.subscribe(nm => {
      this.notificationService.notify(nm);
    });
  }

  success() {
    this.notificationService.notificationSubject.next({
      heading: 'Success',
      message: 'Hurray Success!',
      options: {notificationType: NotificationType.SUCCESS}
    });
  }

  error() {
    this.notificationService.notificationSubject.next({
      heading: 'Error',
      message: 'Oh no an Error!',
      options: {notificationType: NotificationType.ERROR}
    });
  }

}
