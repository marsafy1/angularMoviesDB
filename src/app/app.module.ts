import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import appRoutes from './routerConfig';

import { AppComponent } from './app.component';
import { TopMovieComponent } from './components/top-movie/top-movie.component';
import { NormalMovieComponent } from './components/normal-movie/normal-movie.component';
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
import { MovieModalViewComponent } from './components/movie-modal-view/movie-modal-view.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NormalViewComponent } from './components/normal-view/normal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMovieComponent,
    NormalMovieComponent,
    MainComponent,
    SearchBarComponent,
    NavBarComponent,
    NormalMovieItemComponent,
    TopMovieItemComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    DetailsModalComponent,
    TopMoviesSlidesComponent,
    MovieModalViewComponent,
    SearchResultsComponent,
    NormalViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
