import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Position } from './block/block.component';

@Injectable({
  providedIn: 'root'
})
export class TurnBlockService {
  public turnSub: Subject<Position> = new Subject<Position>();
  public winSub: Subject<string> = new Subject<string>();
  public okNum = 0;
  public steps = 0;
  public arr = [1];
  constructor() { }

  checkWin() {
    // 父组件触发时间 是在子组件订阅事件触发之后 ？
    console.log('okNum:' + this.okNum);
    const that = this;
    if (this.okNum === Math.pow(this.arr.length, 2)) {
      setTimeout(function () {
        alert('win!');
        that.arr.push(that.arr.length + 1);
        that.winSub.next('win');
        that.okNum = 0;
        that.steps = 0;
      }, 200);

    }
  }
}
