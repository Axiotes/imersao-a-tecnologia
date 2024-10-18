import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInfosComponent } from './all-infos.component';

describe('AllInfosComponent', () => {
  let component: AllInfosComponent;
  let fixture: ComponentFixture<AllInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
