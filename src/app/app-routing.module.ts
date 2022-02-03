import { ParkingExitComponent } from './components/parking-exit/parking-exit.component';
import { ExitConfirmationComponent } from './components/exit-confirmation/exit-confirmation.component';
import { ParkedConfirmationComponent } from './components/parked-confirmation/parked-confirmation.component';
import { ParkingEntryComponent } from './components/parking-entry/parking-entry.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'entry',
    component: ParkingEntryComponent
  },
  {
    path: 'exit',
    component: ParkingExitComponent
  },
  {
    path: 'goodbye',
    component: ExitConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
