import { ParkingServiceService } from './../services/parking-service.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';


@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.component.html',
  styleUrls: ['./qrscan.component.css']
})
export class QrscanComponent implements OnInit {

  public information: string = "No code information has been detected. Zoom in on a QR code to scan.";
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  @ViewChild
  (ZXingScannerComponent) qrscanner: ZXingScannerComponent;

  chargeCheck:boolean;
  chargeRequired:boolean;
  codedQRinfo: string;
  notFound:boolean;
  
  constructor(private parkingService:ParkingServiceService) {
    var qrInput:string = "qrInput";

    this.chargeCheck = true;
    this.chargeRequired = true;
    this.codedQRinfo = "";
    this.notFound = false;
  }

  ngOnInit(): void {

    this.qrscanner.enable;
    this.qrscanner.autostart;

    this.qrscanner.scanSuccess.subscribe(result => {

    });

  }

  public scanSuccessHandler($event: any) {
    this.information = $event;
    this.codedQRinfo = ("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + this.information).replace(/\s/g, "");
    this.verifyQRcode(this.codedQRinfo);
  }
  
  public enableScanner() {
    this.information = "No code information has been detected. Zoom in on a QR code to scan.";
  }

  public verifyQRcode(qrCode: string) : void {
    this.parkingService.exitParkingLot(qrCode).subscribe( result => {
      if (result) {
        this.chargeRequired = true;
      }
      else if (!result) {
        this.chargeRequired = false;
      }
      else {
        this.notFound = true;
      }
      this.chargeCheck = false;
    })
  }

}
