import EventEmitter from "../helpers/event-emitter";
import { BoardEventTypes } from "../constants";
import { AnswerType } from "../constants";

class EnemyBoardProvider {
  private board: number[][] = [];
  public eventEmitter: EventEmitter = new EventEmitter();

  public init() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = 0;
      }
    }
    this.render();
  }

  public setAnswer(answerType: string) {
    switch (answerType) {
      // TODO: Implement cases
      case AnswerType.MISS: {
        break;
      }
      case AnswerType.HIT: {
        break;
      }
      case AnswerType.KILL: {
        break;
      }
    }
    this.render();
  }

  private render() {
    this.eventEmitter.emit(BoardEventTypes.ON_UPDATE, this.board);
  }
}

export const enemyBoardProvider = new EnemyBoardProvider();
