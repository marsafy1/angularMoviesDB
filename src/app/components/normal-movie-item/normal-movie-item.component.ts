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
  imgExists = false;
  hideImg:boolean = false;
  hideImage() {
    // this.image = "../../../assets/images/eren_kid.png";
    this.hideImg = true;
  }

  ngOnInit(): void {
    if(this.movie.backdrop_path !== null){
      this.imgExists = true;
      this.hideImg = false;
      this.image = "https://image.tmdb.org/t/p/original/"+this.movie.poster_path;
    }
  
  }
  

}
