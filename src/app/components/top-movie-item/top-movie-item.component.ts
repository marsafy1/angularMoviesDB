import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-movie-item',
  templateUrl: './top-movie-item.component.html',
  styleUrls: ['./top-movie-item.component.scss']
})
export class TopMovieItemComponent implements OnInit {

  @Input() movie:any ={};
  @Input() rank:any;
  popularMovie = {};
  image = "";
 
  constructor() { }
  
  ngOnInit(): void {
    this.popularMovie = this.movie;
    this.image = "https://image.tmdb.org/t/p/original/"+this.movie.backdrop_path;
  
  }


}
