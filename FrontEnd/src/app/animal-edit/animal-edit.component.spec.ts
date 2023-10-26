import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEditComponent } from './animal-edit.component';

describe('AnimalEditComponent', () => {
  let component: AnimalEditComponent;
  let fixture: ComponentFixture<AnimalEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalEditComponent]
    });
    fixture = TestBed.createComponent(AnimalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
