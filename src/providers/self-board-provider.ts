import EventEmitter from "../helpers/event-emitter";
import { BOARD_VALUES, BoardEventTypes, MessageTypes } from "../constants";
import { socketProvider } from "./socket-provider";
import { AnswerType } from "../constants";

class SelfBoardProvider {
  private board: number[][] = [];
  public eventEmitter: EventEmitter = new EventEmitter();

  public init() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = BOARD_VALUES.EMPTY;
      }
    }
    this.render();
  }

  public checkAttack(i: number, j: number) {
    let answerType = AnswerType.MISS;

    switch (this.board[i][j]) {
      case BOARD_VALUES.EMPTY:
        answerType = AnswerType.MISS;
        break;
      case BOARD_VALUES.SHIP:
        answerType = AnswerType.HIT; // TODO: check is killed or hit
        break;
    }

    // TODO: rerender this position

    socketProvider.sendMessage(MessageTypes.ANSWER, {
      userId: "user_1",
      answerType,
    });

    this.render();
  }

  private render() {
    this.eventEmitter.emit(BoardEventTypes.ON_UPDATE, this.board);
  }
}

export const selfBoardProvider = new SelfBoardProvider();
