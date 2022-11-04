import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MinesweeperGameOpsModule {
  public newestFunction(){
    console.log("newest function");
    this.initializeBoard(4,4,15);
  }

  arra:any[] = [[],[]];

  public initializeBoard(xWidth:number, yWidth:number, numOfMines:number){
    //we will begin by setting the size of the board
    // this.arra[yWidth][xWidth];
    for(let i = 0; i < yWidth; i++){
      
      for(let j = 0; j < xWidth; j++){
        this.arra[[i][j]] = 'i ' + i + ' j ' + j;
      }
    }
    console.log(this.arra);
    return this.arra;

    //we will then place the mines


    //we will then place the numbers
  }

 }
