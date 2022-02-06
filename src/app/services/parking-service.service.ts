import { CarDetail } from './../models/carDetail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ParkingServiceService {

  readonly baseUrl: string = "http://localhost:8500/api/parking";

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  enterParkingLot(car: CarDetail): Observable<any> {
    const body = {
      licencePlate: car.licencePlate,
      entranceDate: this.datePipe.transform(Date.now(),'yyyy-MM-ddTHH:mm:ss'),
      qrCode: car.qrCode
    }
    console.log(body);
    return this.http.post<any>(this.baseUrl + "/entry", body);
  }

  exitParkingLot(qrCode: string): Observable<boolean> {
    return this.http.get<boolean>(this.baseUrl + qrCode);
  }
  
}
