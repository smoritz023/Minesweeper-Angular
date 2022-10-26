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

  arra:any[] = [[],[]];
  
  ngOnInit(): void {
    console.log("init");

    for(let i = 0; i < 8; i++){
      let temp;
      let maxJ: number = 0;
      for(let j = 0; j < 8; j++){

        // if(i == 2 && j == 2){
          // temp = this.arra[[i][j]] = 2;
        // }
        // else{
          temp = this.arra[[i][j]] = "i" + i + " j" + j;
        // }
        this.gridlist.push(temp);
        if(j > maxJ){
          maxJ = j;
        } 
      }
      this.columns = maxJ+1;
    }

    console.log(this.gridlist);
    console.log("end init");
  }

  newFunc(inp: any){
    console.log("newfunc: " + inp);

    if(this.gridlist[inp] != 2){
      console.log(this.gridlist[inp]);
      this.gridlist[inp] = 2;
    }
    else{
      this.gridlist[inp] = 0;
    }

    let ind = inp;

    console.log(this.findIndex(ind, this.columns));

  }

  // Columns will default to zero but will be changed by init
  columns:number = 0;

  xHeight = 2;
  yHeight = 1;
  
  gridlist:any[] = [];

  findIndex(inp:number , columns:number){
    let yInd:number = 0;
    let xInd:number = 0;
    // let reductor: number = 0;
    let tempImp: number = inp;
    columns = columns - 1;
    console.log("columns" + columns);
    //finding y index within gridlist by using tempImp and reductor
    if(tempImp < columns){
      while(tempImp > columns){
        tempImp = tempImp - columns;
      }

    }

    console.log("X: " + xInd + " Y: " + yInd);
  }

}
