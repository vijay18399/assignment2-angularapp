import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() customer: Object;
  @Input() layout: String;
  constructor() { }

  ngOnInit(): void {
  }
  isGrid(){
    return(this.layout == 'grid')
  }
  isList(){
    return(this.layout == 'list')
  }

}
