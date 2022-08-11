import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

  constructor() { }
  @Input() text:String = "Empty";
  @Output() btnAction: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }
  onClick(){
    this.btnAction.emit();
  }

}
