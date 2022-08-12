import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { take } from 'rxjs/operators';
import { interval,Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations'; 



@Component({
  selector: 'app-top-movie',
  templateUrl: './top-movie.component.html',
  styleUrls: ['./top-movie.component.scss'],
  animations: [
    trigger('changingAnimation', [
      transition(':enter', [
        style({opacity: 0 }),  // initial
        animate('1s',
          style({opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({opacity: 1}),  // initial
        animate('0.5s',
          style({ opacity: 0}))  // final
      ])
    ])
  ]
})
export class TopMovieComponent implements OnInit {
  slideNumber:number = 0;
  mySubscription: Subscription;

  constructor(private servicesService: ServicesService) { 
     this.mySubscription= interval(100000).subscribe((x =>{
                this.changePage(this.currPage + 1);
            }));
  }

  movies: any[] = [];
  displayedMovie: any[] = [];
  changed: boolean = false;
  // mainTopMovies: any[] = [];
  // topMovie: any = {};
  currPage:number = 0;

  getMovies(){
    //this.movies = this.servicesService.getTopPopularMovies();
    //console.log(this.servicesService.getTopPopularMovies());
    this.servicesService.getPopularMovies().subscribe(data => {this.movies = data.results.slice(6,9); this.displayedMovie = [this.movies[0]] });
  }

  changePage(page: number){
    // console.log(this.topMovie);
    // console.log(this.mainTopMovies[this.currPage]);
    this.changed = true;
    if(page > 2)
      page = 0;
    
    this.currPage = page;
    this.displayedMovie = [this.movies[this.currPage]];
    //this.movies = [this.mainTopMovies[this.currPage]];
  }
  getTopPopularMovies(){
    var topMovies = [];
    var topOne = {vote_average:-1, index: 0};
    var topTwo = {vote_average:-1, index: 0};
    var topThree = {vote_average:-1, index: 0};
    var movies:any = [];
    this.servicesService.getPopularMovies().subscribe((data)=>{

        movies = data.results;
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
       
       
        // this.mainTopMovies = [movies[topOne.index], movies[topTwo.index], movies[topThree.index]];
        // this.topMovie = [this.mainTopMovies[0]];
        // this.movies = this.mainTopMovies;
        // console.log(this.mainTopMovies);
        // console.log(this.movies);
    })
    
  }

  ngOnInit(): void {
    this.getMovies();
  }



}
