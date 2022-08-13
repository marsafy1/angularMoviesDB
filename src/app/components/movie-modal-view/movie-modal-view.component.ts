import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-modal-view',
  templateUrl: './movie-modal-view.component.html',
  styleUrls: ['./movie-modal-view.component.scss']
})
export class MovieModalViewComponent implements OnInit {
  @Input() fromParent: any;
  constructor() { }
  image:any;
  adult:string ='18-';
  hideImg:boolean = false;
  hideImage(){
    this.hideImg = true;
  }
  ngOnInit(): void {
    if(this.fromParent.backdrop_path){
      this.image = "https://image.tmdb.org/t/p/original/"+this.fromParent.backdrop_path;
      this.hideImg = false;
    }
    else{
      this.hideImg = true;
    }
    this.adult = this.fromParent.adult === true? "18+":"18-";
    
  }

}
