import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileReadService {

  constructor(private http: HttpClient) {}

  getFileContent(): Observable<string> {
    return this.http.get('../assets/reci.txt', { responseType: 'text' });
  }
}
