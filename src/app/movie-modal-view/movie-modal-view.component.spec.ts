import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModalViewComponent } from './movie-modal-view.component';

describe('MovieModalViewComponent', () => {
  let component: MovieModalViewComponent;
  let fixture: ComponentFixture<MovieModalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieModalViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
