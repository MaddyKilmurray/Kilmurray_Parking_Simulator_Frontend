import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit-confirmation',
  templateUrl: './exit-confirmation.component.html',
  styleUrls: ['./exit-confirmation.component.css']
})
export class ExitConfirmationComponent implements OnInit {

  @Input() chargeRequired!:Boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
