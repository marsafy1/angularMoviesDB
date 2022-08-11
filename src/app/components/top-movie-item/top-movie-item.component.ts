import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-top-movie-item',
  templateUrl: './top-movie-item.component.html',
  styleUrls: ['./top-movie-item.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],

})
export class TopMovieItemComponent implements OnInit {

  @Input() movie:any ={};
  @Input() rank:any;
  popularMovie = {};
  image = "";
 
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.movie);
    this.popularMovie = this.movie;
    this.image = "https://image.tmdb.org/t/p/original/"+this.movie.backdrop_path;
  
  }


}
