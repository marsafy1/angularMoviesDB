import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MovieModalViewComponent } from 'src/app/components/movie-modal-view/movie-modal-view.component';
import { ServicesService } from 'src/app/services/services.service';

@Component({selector: 'app-details-modal', templateUrl: './details-modal.component.html'})
export class DetailsModalComponent {
  constructor(private modalService: NgbModal, private servicesService:ServicesService) {}
  @Input() movie: any = {id:""};
 
  data = {};
  ngOnInit(){
    this.data = this.movie;

    this.servicesService.getDetailedMovie(this.movie.id).subscribe((data)=>{this.data = data})
  }
  open() {
    const modalRef = this.modalService.open(MovieModalViewComponent,{backdropClass:"backdrop"});
    modalRef.componentInstance.name = 'Movie Details';
    modalRef.componentInstance.fromParent = this.data;
    
  }
}