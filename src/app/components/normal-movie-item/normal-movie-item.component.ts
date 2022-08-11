import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-normal-movie-item',
  templateUrl: './normal-movie-item.component.html',
  styleUrls: ['./normal-movie-item.component.scss']
})
export class NormalMovieItemComponent implements OnInit {

  @Input() movie:any;
  constructor() { }
  image = "";
  ngOnInit(): void {

    this.image = "https://image.tmdb.org/t/p/original/"+this.movie.poster_path;
  
  }
  

}
