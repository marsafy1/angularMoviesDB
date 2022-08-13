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

    this.servicesService.getPopularMovies().subscribe(data => {this.movies = data.results.slice(0,3); this.displayedMovie = [this.movies[0]] });
  }

  changePage(page: number){

    this.changed = true;
    if(page > 2)
      page = 0;
    
    this.currPage = page;
    this.displayedMovie = [this.movies[this.currPage]];
    //this.movies = [this.mainTopMovies[this.currPage]];
  }


  ngOnInit(): void {
    this.getMovies();
  }



}
