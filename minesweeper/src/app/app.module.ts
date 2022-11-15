import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SquareComponent } from './square/square.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridComponent } from './grid/grid.component';
import { BoardComponent } from './board/board.component';
import {MatMenuModule} from '@angular/material/menu'; 
// import { HostListener } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    GridComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
