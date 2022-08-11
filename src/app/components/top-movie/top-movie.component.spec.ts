import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMovieComponent } from './top-movie.component';

describe('TopMovieComponent', () => {
  let component: TopMovieComponent;
  let fixture: ComponentFixture<TopMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
