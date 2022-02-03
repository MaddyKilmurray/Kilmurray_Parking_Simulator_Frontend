import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkedConfirmationComponent } from './parked-confirmation.component';

describe('ParkedConfirmationComponent', () => {
  let component: ParkedConfirmationComponent;
  let fixture: ComponentFixture<ParkedConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkedConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkedConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
