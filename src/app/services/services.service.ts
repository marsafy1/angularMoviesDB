import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  api_key = "fe5bad60eac91ea51d5b412ad20049e2";
  mainUrl = "https://api.themoviedb.org/3/movie/popular?api_key=8ca7086260d6440956c15917b02b2ef1&language=en-US";
  
  popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&sort_by=popularity.desc`;
  detailedUrl = `https://api.themoviedb.org/3/movie/343611?api_key=${this.api_key}&language=en-US`
  constructor(private http: HttpClient) {

  }
  
  data:any;
  getPopularMovies(){   
    var data = this.http.get<any>(this.popularUrl)
    return data;
  }
  compute(){
    return 77;
  }
  getDetailedMovie(id: number){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US`)
  }
  getSearchedMovies(searchInput:string){
    
   
    
    var query = "";

    if(searchInput !== ""){
      var searchWords = searchInput.split(' ');
      for(const word of searchWords){
        query += word+"+";
      }
    }
    console.log("this is the query", query);
    console.log("I"+query+"I");
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}&sort_by=popularity.desc`);

  }




 
}
