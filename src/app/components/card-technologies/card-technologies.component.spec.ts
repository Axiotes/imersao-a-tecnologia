import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTechnologiesComponent } from './card-technologies.component';

describe('CardTechnologiesComponent', () => {
  let component: CardTechnologiesComponent;
  let fixture: ComponentFixture<CardTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
