import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parked-confirmation',
  templateUrl: './parked-confirmation.component.html',
  styleUrls: ['./parked-confirmation.component.css']
})
export class ParkedConfirmationComponent implements OnInit {

  @Input() qrCode!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
