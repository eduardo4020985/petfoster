import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCardsComponent } from './animal-cards.component';

describe('AnimalCardsComponent', () => {
  let component: AnimalCardsComponent;
  let fixture: ComponentFixture<AnimalCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalCardsComponent]
    });
    fixture = TestBed.createComponent(AnimalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
