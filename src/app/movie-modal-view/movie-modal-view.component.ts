import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-modal-view',
  templateUrl: './movie-modal-view.component.html',
  styleUrls: ['./movie-modal-view.component.scss']
})
export class MovieModalViewComponent implements OnInit {
  @Input() fromParent: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.fromParent);
  }

}
