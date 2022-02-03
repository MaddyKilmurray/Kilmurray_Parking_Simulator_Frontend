import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  readonly baseUrl: string = "http://api.qrserver.com/v1/read-qr-code/";

  constructor(private http:HttpClient) { }

  readQRcode() : Observable<any> {
    
  }
}
