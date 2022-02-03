import { CarDetail } from './../../models/carDetail.model';
import { ParkingServiceService } from './../../services/parking-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-entry',
  templateUrl: './parking-entry.component.html',
  styleUrls: ['./parking-entry.component.css']
})
export class ParkingEntryComponent implements OnInit {

  showForm:boolean;

  entryForm: FormGroup;
  licencePlate: FormControl;

  qrCode:string;

  carDetail:CarDetail;

  ngOnInit(): void {
  }

  constructor(private router:Router, private parkingService:ParkingServiceService) {

    this.showForm = true;
    this.qrCode = "";
    this.carDetail = new CarDetail("","");

    this.licencePlate = new FormControl('',[Validators.required]);
    this.entryForm = new FormGroup ({
      licencePlate:this.licencePlate
    })
  }

  submitForm() : void {
    this.qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + this.licencePlate.value;
    this.carDetail = new CarDetail(this.licencePlate.value,this.qrCode);
    this.changeView();
    this.parkingService.enterParkingLot(this.carDetail).subscribe(result => {
      console.log("Saved");
    });
  }

  changeView() :void {
    this.showForm = !this.showForm;
  }
}
