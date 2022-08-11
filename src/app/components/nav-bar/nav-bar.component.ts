import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private service: ServicesService) { 

  }

  ngOnInit(): void {
  }
  test(){
    this.service.getPopularMovies().subscribe(data => console.log(data));
    //console.log(this.service.getPopularMovies());
    
   
  }
}
