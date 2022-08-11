import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-top-movie',
  templateUrl: './top-movie.component.html',
  styleUrls: ['./top-movie.component.scss']
})
export class TopMovieComponent implements OnInit {
  slideNumber:number = 0;
  constructor(private servicesService: ServicesService) { 

  }
  movies: any[] = [];
  
  getMovies(){
    this.servicesService.getPopularMovies().subscribe(data => {this.movies = data.results; this.movies = this.movies.slice(0,3); console.log(this.movies)});
  }

  ngOnInit(): void {
    this.getMovies();
  }



}
