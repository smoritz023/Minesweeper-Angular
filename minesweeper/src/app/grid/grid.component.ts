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
    for(let i = 0; i < this.arrY.length; i++){
      let temp;
      for(let j = 0; j < this.arrX.length; j++){
        if(j == 0){
          temp = this.arrY[i];
          this.gridlist.push(temp);
          temp = this.arrX[j];
          this.gridlist.push(temp);
        }
        else{
          temp = this.arrX[j];
          this.gridlist.push(temp);
        }

        // this.gridlist.push(temp);
        // console.log(this.gridlist);
      }
    }
    console.log(this.gridlist);
  }

  newFunc(inp: any){
    console.log("newfunc: " + inp);



    // for(let i = 0; i < this.arrX.length; i++){
    //   let temp;
    //   for(let j = 0; j < this.arrY.length; j++){
    //     if(j == 0){
    //       temp = this.arrX[i];
    //       this.gridlist.push(temp);
    //       temp = this.arrY[j];
    //       this.gridlist.push(temp);
    //     }
    //     else{
    //       temp = this.arrY[j];
    //       this.gridlist.push(temp);
    //     }

    //     // this.gridlist.push(temp);
    //     // console.log(this.gridlist);
    //   }
    // }
    console.log(this.gridlist);

  }

  arr = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5"
  ];
  columns = 6;
  xHeight = 2;
  yHeight = 1;

  arrX = ['x1','x2','x3','x4','x5'];
  arrY = ['y6','y7','y8','y9','y10'];

  gridlist:any[] =  [];
  
  


  inpX = 0;
  inpY = 0;




}
