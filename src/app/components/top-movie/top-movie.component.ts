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
  mainTopMovies: any[] = [];
  topMovie: any = [];
  currPage:number = 0;

  getMovies(){
    //this.movies = this.servicesService.getTopPopularMovies();
    //console.log(this.servicesService.getTopPopularMovies());
    this.servicesService.getPopularMovies().subscribe(data => {this.movies = data.results; this.movies = this.movies.slice(0,3);});
  }

  changePage(page: number){
    console.log(this.topMovie);
    console.log(this.mainTopMovies[this.currPage]);
    this.currPage = page;
    this.movies = [this.mainTopMovies[this.currPage]];
  }
  getTopPopularMovies(){
    var topMovies = [];
    var topOne = {vote_average:-1, index: 0};
    var topTwo = {vote_average:-1, index: 0};
    var topThree = {vote_average:-1, index: 0};
    var movies:any = [];
    this.servicesService.getPopularMovies().subscribe((data)=>{

        movies = data.results
        for(var i = 0 ; i < movies.length; i++){
          if(movies[i].vote_average > topOne.vote_average){
            topOne = {vote_average: movies[i].vote_average, index:i};
          }
        }
        for(var i = 0 ; i < movies.length; i++){
          if(movies[i].vote_average > topTwo.vote_average && topOne.index !== i){
            topTwo = {vote_average: movies[i].vote_average, index:i};
          }
        }
        for(var i = 0 ; i < movies.length; i++){
          if(movies[i].vote_average > topThree.vote_average && i !== topTwo.index && i !== topOne.index){
            topThree = {vote_average: movies[i].vote_average, index:i};
          }
        }
       
       
        this.mainTopMovies = [movies[topOne.index], movies[topTwo.index], movies[topThree.index]];
        this.topMovie = [this.mainTopMovies[0]];
        this.movies = this.mainTopMovies;
        console.log(this.mainTopMovies);
        console.log(this.movies);
    })
    
  }

  ngOnInit(): void {
    this.getTopPopularMovies();
  }



}
