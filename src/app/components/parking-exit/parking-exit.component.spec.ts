import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingExitComponent } from './parking-exit.component';

describe('ParkingExitComponent', () => {
  let component: ParkingExitComponent;
  let fixture: ComponentFixture<ParkingExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingExitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
