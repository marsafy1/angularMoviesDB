import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-normal-movie',
  templateUrl: './normal-movie.component.html',
  styleUrls: ['./normal-movie.component.scss']
})
export class NormalMovieComponent implements OnInit {

  constructor(private servicesService : ServicesService) { }


  movies: any[] = [];
  displayedMovies: any[] = [];
  page = 0;
  
  getMovies(){
    this.servicesService.getPopularMovies().subscribe(data => {this.movies = data.results; this.movies = this.movies; this.displayedMovies = this.movies.slice(this.page, this.page + 10)});
  }

  ngOnInit(): void {
    this.getMovies();
  }
  changePage(value:number){
   // 0 to 10, next should be from 10

    if(this.page + value < 0){return;}
    else if(this.page + value + 10 > this.movies.length ){
      this.displayedMovies = this.movies.slice(this.movies.length-10 , this.movies.length);
      return;
    }    
  
    //console.log(this.movies.length - 9, this.movies.length);
    this.page += value;
    this.displayedMovies = this.movies.slice(this.page , this.page + 10);
    
  }
  updateDisplayedMovies(){
    this.displayedMovies = this.movies.slice(this.page, this.page*10 + 1);
  }

}
