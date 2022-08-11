import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-movies-slides',
  templateUrl: './top-movies-slides.component.html',
  styleUrls: ['./top-movies-slides.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class TopMoviesSlidesComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  maybe = ["<h1>hi</h1>"]
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}