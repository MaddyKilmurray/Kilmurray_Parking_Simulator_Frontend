import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ParkingEntryComponent } from './components/parking-entry/parking-entry.component';
import { ParkedConfirmationComponent } from './components/parked-confirmation/parked-confirmation.component';
import { ParkingExitComponent } from './components/parking-exit/parking-exit.component';
import { ExitConfirmationComponent } from './components/exit-confirmation/exit-confirmation.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'

import { DatePipe } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrscanComponent } from './qrscan/qrscan.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ParkingEntryComponent,
    ParkedConfirmationComponent,
    ParkingExitComponent,
    ExitConfirmationComponent,
    QrscanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    ZXingScannerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
