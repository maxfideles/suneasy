import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorWebComponent } from './simulator-web.component';

describe('SimulatorWebComponent', () => {
  let component: SimulatorWebComponent;
  let fixture: ComponentFixture<SimulatorWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulatorWebComponent]
    });
    fixture = TestBed.createComponent(SimulatorWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
