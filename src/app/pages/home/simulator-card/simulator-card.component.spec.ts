import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorCardComponent } from './simulator-card.component';

describe('SimulatorCardComponent', () => {
  let component: SimulatorCardComponent;
  let fixture: ComponentFixture<SimulatorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
