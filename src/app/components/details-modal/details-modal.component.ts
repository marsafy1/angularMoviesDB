import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MovieModalViewComponent } from 'src/app/components/movie-modal-view/movie-modal-view.component';


@Component({selector: 'app-details-modal', templateUrl: './details-modal.component.html'})
export class DetailsModalComponent {
  constructor(private modalService: NgbModal) {}
  @Input() movie: any;
 
  data = {};
  ngOnInit(){
    this.data = this.movie;
  }
  open() {
    const modalRef = this.modalService.open(MovieModalViewComponent);
    modalRef.componentInstance.name = 'Movie Details';
    modalRef.componentInstance.fromParent = this.movie;
    
  }
}