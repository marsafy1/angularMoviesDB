import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMovieItemComponent } from './top-movie-item.component';

describe('TopMovieItemComponent', () => {
  let component: TopMovieItemComponent;
  let fixture: ComponentFixture<TopMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMovieItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
