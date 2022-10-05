import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})


export class GridComponent implements OnInit {


  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.arr);
  }

  newFunc(inp: any){
    console.log("newfunc: " + inp);



    for(let i = 0; i < this.arrX.length; i++){
      for(let j = 0; j < this.arrY.length; j++){
        let temp = this.arrX[i];
        this.gridlist.push(temp);
        console.log(this.gridlist);
      }
    }

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

  arrX = [1,2,3,4,5];
  arrY = [6,7,8,9,10];

  gridlist:number[] =  [];
  
  


  inpX = 0;
  inpY = 0;




}
