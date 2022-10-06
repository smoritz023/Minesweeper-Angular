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

    //putting 2 indidivual arrays into one gidlist array
    // for(let i = 0; i < this.arrY.length; i++){
    //   let temp;
    //   for(let j = 0; j < this.arrX.length; j++){
        // if(j == 0){
        //   temp = this.arrY[i];
        //   this.gridlist.push(temp);
        //   temp = this.arrX[j];
        //   this.gridlist.push(temp);
        // }
        // else{
        //   temp = this.arrX[j];
        //   this.gridlist.push(temp);
        // }
    //   }
    // }

    console.log("init");

    for(let i = 0; i < 2; i++){
      let temp;
      for(let j = 0; j < 2; j++){

        temp = this.arra[i][j] = "i" + i + "j" + j;
        this.gridlist.push(temp);
        
      }
    }


    console.log(this.gridlist);
    console.log("end init");
  }

  newFunc(inp: any){
    console.log("newfunc: " + inp);

    console.log(this.gridlist);

    this.arra[0][0] = "zero zero";
    this.arra[0][1] = "zero one";
    this.arra[1][0] = "one zero";
    this.arra[1][1] = "one one";

    console.log(this.arra);
  }

  columns = 6;
  xHeight = 2;
  yHeight = 1;

  arrX = ['x1','x2','x3','x4','x5'];
  arrY = ['y6','y7','y8','y9','y10'];

  arra:any[] = [[],[]];
  
  gridlist:any[] = [];

}
