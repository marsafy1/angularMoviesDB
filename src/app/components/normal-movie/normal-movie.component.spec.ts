import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalMovieComponent } from './normal-movie.component';

describe('NormalMovieComponent', () => {
  let component: NormalMovieComponent;
  let fixture: ComponentFixture<NormalMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
