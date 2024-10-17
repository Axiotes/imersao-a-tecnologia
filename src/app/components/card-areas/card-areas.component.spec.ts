import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAreasComponent } from './card-areas.component';

describe('CardAreasComponent', () => {
  let component: CardAreasComponent;
  let fixture: ComponentFixture<CardAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAreasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
