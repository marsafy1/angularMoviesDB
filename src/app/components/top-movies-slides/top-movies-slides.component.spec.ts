import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviesSlidesComponent } from './top-movies-slides.component';

describe('TopMoviesSlidesComponent', () => {
  let component: TopMoviesSlidesComponent;
  let fixture: ComponentFixture<TopMoviesSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMoviesSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMoviesSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
