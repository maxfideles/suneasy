import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterCardComponent } from './inverter-card.component';

describe('InverterCardComponent', () => {
  let component: InverterCardComponent;
  let fixture: ComponentFixture<InverterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InverterCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InverterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
