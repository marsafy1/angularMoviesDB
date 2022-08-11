import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { TopMovieComponent } from './components/top-movie/top-movie.component';
import { NormalMovieComponent } from './components/normal-movie/normal-movie.component';
import { DetailedMovieComponent } from './components/detailed-movie/detailed-movie.component';
import { MainComponent } from './components/main/main.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NormalMovieItemComponent } from './components/normal-movie-item/normal-movie-item.component';
import { TopMovieItemComponent } from './components/top-movie-item/top-movie-item.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { TopMoviesSlidesComponent } from './components/top-movies-slides/top-movies-slides.component';
import { MovieModalViewComponent } from './movie-modal-view/movie-modal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMovieComponent,
    NormalMovieComponent,
    DetailedMovieComponent,
    MainComponent,
    SearchBarComponent,
    NavBarComponent,
    NormalMovieItemComponent,
    TopMovieItemComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    DetailsModalComponent,
    TopMoviesSlidesComponent,
    MovieModalViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
