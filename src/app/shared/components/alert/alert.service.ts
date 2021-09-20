import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Alert, AlertType} from './alert';
import {NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject: Subject<Alert> = new Subject<Alert>();
  keepAfterRouteChange:boolean = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if(this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear()
        }
      }
    })
  }

  success(message: string, keepAfterRouteCahnge: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteCahnge)
  }

  warning(message: string, keepAfterRouteCahnge: boolean = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouteCahnge)
  }
  danger(message: string, keepAfterRouteCahnge: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouteCahnge)
  }
  info(message: string, keepAfterRouteCahnge: boolean = false) {
    this.alert(AlertType.INFO, message, keepAfterRouteCahnge)
  }

  private alert(alertType: AlertType, message: string, keepAfterRouteCahnge: boolean = false) {
    this.keepAfterRouteChange = keepAfterRouteCahnge;
    this.alertSubject.next(new Alert(alertType, message))
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  clear() {
    // @ts-ignore
    this.alertSubject.next(null)
  }
}
