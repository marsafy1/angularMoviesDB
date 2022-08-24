import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TopMovieComponent } from './top-movie.component';

describe('TopMovieComponent', () => {
  let component: TopMovieComponent;
  let fixture: ComponentFixture<TopMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[HttpClientModule],
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
