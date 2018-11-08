import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TurnBlockService } from '../turn-block.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  // public pos: Position = new Position(0, 0);
  @Input()
  public x: number;
  @Input()
  public y: number;
  isGood = false;
  clsName = 'blueBlock';

  constructor(private turnService: TurnBlockService) { }

  ngOnInit() {
    this.turnService.turnSub.subscribe((value: Position) => {
      // console.log('value:' + value.x + '|' + value.y);

      if (this.isNeighbor(value)) {
        this.changeColor(false);
      }
    });

    this.turnService.winSub.subscribe((v) => {
      this.reset();
    });
  }

  isNeighbor(value: Position): boolean {
    const isLeft: boolean = this.x === value.x && this.y - 1 === value.y;
    const isRight: boolean = this.x === value.x && this.y + 1 === value.y;
    const isTop: boolean = this.x - 1 === value.x && this.y === value.y;
    const isBottom: boolean = this.x + 1 === value.x && this.y === value.y;
    return isLeft || isRight || isTop || isBottom;
  }

  changeColor(isActive: boolean) {
   
    if (this.isGood) {
      this.clsName = 'blueBlock';
      this.turnService.okNum = this.turnService.okNum - 1;
    } else {
      this.clsName = 'greenBlock';
      this.turnService.okNum = this.turnService.okNum + 1;
    }
    this.isGood = !this.isGood;
    // console.log('pos: ' + this.x + '|' + this.y);
    if (isActive) {
      // 空的 主动点击 发射
      this.turnService.turnSub.next(new Position(this.x, this.y));
      this.turnService.steps = this.turnService.steps + 1;
    }
  }

  reset() {
    this.isGood = false;
    this.clsName = 'blueBlock';
  }

}

export class Position {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
