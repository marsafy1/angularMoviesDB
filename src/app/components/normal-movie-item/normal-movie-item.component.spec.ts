import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalMovieItemComponent } from './normal-movie-item.component';

describe('NormalMovieItemComponent', () => {
  let component: NormalMovieItemComponent;
  let fixture: ComponentFixture<NormalMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalMovieItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
