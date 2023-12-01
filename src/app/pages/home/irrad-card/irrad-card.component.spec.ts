import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrradCardComponent } from './irrad-card.component';

describe('IrradCardComponent', () => {
  let component: IrradCardComponent;
  let fixture: ComponentFixture<IrradCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrradCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrradCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
