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
    console.log("init");

    for(let i = 0; i < 2; i++){
      let temp;
      for(let j = 0; j < 2; j++){

        temp = this.arra[i][j] = "i" + i + " j" + j;
        this.gridlist.push(temp);
        
      }
    }


    console.log(this.gridlist);
    console.log("end init");
  }

  newFunc(inp: any){
    console.log("newfunc: " + inp);

    // console.log(this.gridlist);

    // this.arra[0][0] = 0;
    // this.arra[0][1] = 1;
    // this.arra[1][0] = 2;
    // this.arra[1][1] = 3;

    // console.log(this.arra);

    console.log(this.gridlist[inp]);
  }

  columns = 2;
  xHeight = 2;
  yHeight = 1;

  arrX = ['x1','x2','x3','x4','x5'];
  arrY = ['y6','y7','y8','y9','y10'];

  arra:any[] = [[],[]];
  
  gridlist:any[] = [];

}
