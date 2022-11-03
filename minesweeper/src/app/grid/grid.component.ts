import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MinesweeperGameOpsModule } from '../modules/minesweeper-game-ops/minesweeper-game-ops.module';
// import { createHostListener, HostListener } from '@angular/compiler/src/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  gameOps: any;
  scrHeight:any;
  scrWidth:any;

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }

  arra:any[] = [[],[]];
  
  ngOnInit(): void {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);

    // this.myDate = new Date();
    this.gameOps = new MinesweeperGameOpsModule;

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

    this.findIndex(ind, this.columns);
    if(this.xInd && this.yInd){
      console.log("Left Click");
      console.log("X: " + this.xInd + " Y: " + this.yInd);
      console.log(" ");
    }

    //Reset the x and y values
    this.xInd = 0;
    this.yInd = 0;
  }

  onRightClick(inp: any) {
    if(this.gridlist[inp] != 3){
      console.log(this.gridlist[inp]);
      this.gridlist[inp] = 3;
    }
    else if (this.gridlist[inp] == 3){
      this.gridlist[inp] = 1;
    }
    // else{
    //   this.gridlist[inp] = 0;
    // }

    let ind = inp;

    this.findIndex(ind, this.columns);
    if(this.xInd && this.yInd){
      console.log("Right Click");
      console.log("X: " + this.xInd + " Y: " + this.yInd);
      console.log(" ");
    }
    // console.log("right clicked: " + inp);
    //Reset the x and y values
    this.xInd = 0;
    this.yInd = 0;
    
    return false;
  }

  // Columns will default to zero but will be changed by init
  columns:number = 0;

  xHeight = 2;
  yHeight = 1;
  xInd = 0;
  yInd = 0;
  
  gridlist:any[] = [];

  findIndex(inp:number , columns:number){
    // let yInd:number = 0;
    // let xInd:number = 0;
    let tempImp: number = inp;
    // console.log("tempImp: " + tempImp);
    // console.log("columns" + columns);
    if(tempImp < columns){
      this.yInd = 0;
      this.xInd = tempImp;
    }
    if(tempImp >= columns){
      while(tempImp > columns){
        tempImp = tempImp - columns;
        this.yInd++;
      }
      this.xInd = tempImp;
      if(this.xInd == columns){
        this.xInd = 0;
        this.yInd++;
      }
    }
    this.gameOps.newestFunction();
    // console.log("X: " + this.xInd + " Y: " + this.yInd);
  }

}
