import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  constructor() { }
  status =false;
  prev = 0;
  current = 0;
  ngOnInit(): void {
  }
  numbers =[]
  counter(i: number) {
    return new Array(i);
}
PickOne(){
  
  if(this.numbers.length==100){
this.status = true; 
  }
  else{
    let num = this.RandomNumPicker();
    this.numbers.push(num);
    this.prev = this.current;
    this.current =num;
    console.log(this.numbers);
  }

}
setColor(num){
if(this.numbers.includes(num)){
  return('green');
}
else{
  return('orange');
}
}
RandomNumPicker(){
  while(true){
  let num =  Math.floor((Math.random() * 100) + 1);
  if(!this.numbers.includes(num)){
      return num;
  }
  }
 
}
Reset(){
  this.numbers =[];
  this.status =false;
  this.prev = 0;
  this.current = 0;
}
}
