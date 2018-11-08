import { Component } from '@angular/core';
import { TurnBlockService } from './turn-block.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'block-game';
  blocks = this.service.arr;
  steps = this.service.steps;
  constructor(private service: TurnBlockService) { }
  checkWin() {
    this.service.checkWin();
    // const that = this;
    // setTimeout(function () {
    //   // this 变了
    //   that.service.checkWin(); // 点了之后,先变色，再+1,再check？
    // }, 300);
  }
}
