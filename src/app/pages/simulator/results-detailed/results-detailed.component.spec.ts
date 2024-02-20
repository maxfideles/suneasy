import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsDetailedComponent } from './results-detailed.component';

describe('ResultsDetailedComponent', () => {
  let component: ResultsDetailedComponent;
  let fixture: ComponentFixture<ResultsDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
