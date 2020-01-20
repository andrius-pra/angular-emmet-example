import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emmet',
  template: `
  div
    
  div*5
    
  div.a.b.c.d>ul>li>a{item }*5
  
  `,
  styles: [`
  div {
    width: 10px;
    height: 20px;
  }

  `]
})
export class EmmetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} 
