import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private sharedDataSubject = new BehaviorSubject<string>('');
  sharedData$ = this.sharedDataSubject.asObservable();

  setSharedData(data: string) {
    this.sharedDataSubject.next(data);
  }
}