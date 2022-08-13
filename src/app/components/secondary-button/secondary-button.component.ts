import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent implements OnInit {

  constructor() { }
  @Input() text: string = "Empty";
  @Input() checked: boolean = false;
  @Output() btnAction: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }
  onClick(){
    this.btnAction.emit();
  }

}
