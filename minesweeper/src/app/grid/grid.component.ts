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

    for(let i = 0; i < 7; i++){
      let temp;
      let maxJ: number = 0;
      for(let j = 0; j < 7; j++){

        temp = this.arra[[i][j]] = "i" + i + " j" + j;
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

    console.log(this.gridlist[inp]);
  }

  // Columns will default to zero but will be changed by init
  columns:number = 0;

  xHeight = 2;
  yHeight = 1;
  
  gridlist:any[] = [];

}
