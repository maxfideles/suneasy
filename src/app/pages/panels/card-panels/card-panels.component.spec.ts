import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPanelsComponent } from './card-panels.component';

describe('CardPanelsComponent', () => {
  let component: CardPanelsComponent;
  let fixture: ComponentFixture<CardPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
