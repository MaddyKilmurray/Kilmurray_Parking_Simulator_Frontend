import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-exit',
  templateUrl: './parking-exit.component.html',
  styleUrls: ['./parking-exit.component.css']
})
export class ParkingExitComponent implements OnInit {

  showForm:Boolean

  chargeRequired:Boolean;

  qrCode:FormControl;
  exitForm:FormGroup;

  fileName:string;

  constructor(private http:HttpClient) { 
    this.showForm = true;
    this.chargeRequired = true;
    this.fileName = "";

    this.qrCode = new FormControl('',[Validators.required]);
    this.exitForm = new FormGroup({
      qrCode:this.qrCode
    })
  }

  ngOnInit(): void {
  }

}
