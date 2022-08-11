import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  api_key = "fe5bad60eac91ea51d5b412ad20049e2";
  mainUrl = "https://api.themoviedb.org/3/movie/popular?api_key=8ca7086260d6440956c15917b02b2ef1&language=en-US"
  constructor(private http: HttpClient) {

  }

  getPopularMovies(){
    return this.http.get<any>(this.mainUrl);
  }

  toDo(){
    return "Hi";
  }
}
