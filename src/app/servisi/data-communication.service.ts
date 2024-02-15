import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  private methodTriggeredSource = new Subject<void>();

  methodTriggered$ = this.methodTriggeredSource.asObservable();

  triggerMethod() {
    this.methodTriggeredSource.next();
  }
}
