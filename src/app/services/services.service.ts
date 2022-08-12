import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  api_key = "fe5bad60eac91ea51d5b412ad20049e2";
  mainUrl = "https://api.themoviedb.org/3/movie/popular?api_key=8ca7086260d6440956c15917b02b2ef1&language=en-US";

  popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US`;
  detailedUrl = `https://api.themoviedb.org/3/movie/343611?api_key=${this.api_key}&language=en-US`
  constructor(private http: HttpClient) {

  }
  
  data:any;
  getPopularMovies(){
    return this.http.get<any>(this.popularUrl)
  }

  getDetailedMovie(id: number){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US`)
  }
  getSearchedMovies(searchInput:string){

    var searchWords = searchInput.split(' ');
    var query = "";
    for(const word of searchWords){
      query += word+"+";
    }
 
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}`);

  }




  getTopPopularMovies(){
    var topMovies = [];
    var topOne = {vote_average:-1, index: 0};
    var topTwo = {vote_average:-1, index: 0};
    var topThree = {vote_average:-1, index: 0};
    var movies:any = [];
    this.getPopularMovies().subscribe((data)=>{
        console.log(data);
        movies = data.results
        for(var i = 0 ; i < movies.length; i++){
          if(movies[i].vote_average > topOne.vote_average){
            topOne = {vote_average: movies[i].vote_average, index:i};
          }
        }
        for(var i = 0 ; i < movies.length; i++){
          if(movies[i].vote_average > topTwo.vote_average && topOne.index !== topTwo.index){
            topTwo = {vote_average: movies[i].vote_average, index:i};
          }
        }
        for(var i = 0 ; i < movies.length; i++){
          if(movies[i].vote_average > topThree.vote_average && topThree.index !== topTwo.index && topThree.index !== topOne.index){
            topThree = {vote_average: movies[i].vote_average, index:i};
          }
        }
    })
    return [movies[topOne.index], movies[topTwo.index], movies[topThree.index]]
  }
  toDo(){
    return "Hi";
  }
}
