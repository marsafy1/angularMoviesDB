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
  originalMovies: any[] = [];
  displayedMovies: any[] = [];
  searchedMovies: any[] = [];
  page = 0;
  items:any[]= ['item1', 'item2', 'item3', 'item4'];
  notEmpty:boolean = true;
  actionFilter: boolean = false;
  comedyFilter: boolean = false;
  dramaFilter: boolean = false;

  objFilters:any = {
    28:false,
    35:false,
    18:false
  };
  filters:any[]=[];
  goBack(){
    this.movies = this.originalMovies;
    this.filters = [];
    this.objFilters = {
      28:false,
      35:false,
      18:false
    };
    this.displayedMovies = this.movies.slice(this.page, this.page + 10);
    this.notEmpty=this.movies.length !==0;
  }
  
  changeGenre(newGenre: any){
    if(this.filters.includes(newGenre)){
      if(this.objFilters[newGenre]){
    
        this.filters = this.filters.filter((filter)=> {return filter !== newGenre})
        this.objFilters[newGenre] = false;
      }

    }
    else{
    
      this.objFilters[newGenre] = true;
      this.filters.push(newGenre);
    }
 

    var newMovies = this.searchedMovies.filter((movie)=> {return this.filters.every((f)=>{ return movie.genre_ids.includes(f)})  });
    this.movies = newMovies;
    this.displayedMovies = this.movies.slice(this.page, this.page + 10);

    if(this.movies.length === 0) this.notEmpty=false;
    else this.notEmpty=true;
  }
  changeContent(newItem: any) {
    this.filters = [];
    this.objFilters = {
      28:false,
      35:false,
      18:false
    };
    

    this.movies = newItem.results;
    this.searchedMovies = this.movies;
    this.displayedMovies = this.movies.slice(this.page, this.page + 10);
    if(this.movies.length === 0) this.notEmpty=false;
    else this.notEmpty=true;
  }

  getMovies(){
    this.servicesService.getPopularMovies().subscribe(data => {this.movies = data.results; this.searchedMovies = this.movies;this.originalMovies = this.movies; this.displayedMovies = this.movies.slice(this.page, this.page + 10)});

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
  
    this.page += value;
    this.displayedMovies = this.movies.slice(this.page , this.page + 10);
    
  }
  updateDisplayedMovies(){
    this.displayedMovies = this.movies.slice(this.page, this.page*10 + 1);
  }

}
