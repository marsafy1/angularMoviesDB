import { Component, OnInit } from '@angular/core';
import { ServicesService
 } from 'src/app/services/services.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private servicesService: ServicesService) { 

  }
  searchInput: string = "";

  onKey(event:any) {
    const inputValue = event.target.value;
    this.searchInput = event.target.value;
  }

  onSubmit(){
    if(this.searchInput !== '')
      this.servicesService.getSearchedMovies(this.searchInput).subscribe((data)=>{console.log(data)});
    else
      alert("Can't be empty :)")
  }
  ngOnInit(): void {
  }

}
