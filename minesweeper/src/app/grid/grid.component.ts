import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})


export class GridComponent implements OnInit {


  constructor() { }
  
  ngOnInit(): void {
    console.log(this.arr);
  }

  newFunc(i: any){
    console.log("newfunc: " + i);
  }

  arr = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5"
  ];
  columns = 3;
  xHeight = 2;
  yHeight = 1;


}
