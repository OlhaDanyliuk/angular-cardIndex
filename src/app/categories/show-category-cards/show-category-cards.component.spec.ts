import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoryCardsComponent } from './show-category-cards.component';

describe('ShowCategoryCardsComponent', () => {
  let component: ShowCategoryCardsComponent;
  let fixture: ComponentFixture<ShowCategoryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCategoryCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
