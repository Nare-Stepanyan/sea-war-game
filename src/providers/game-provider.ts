import { selfBoardProvider } from "./self-board-provider";
import { enemyBoardProvider } from "./enemy-board-provider";
import { MessageTypes } from "../constants";
import { socketProvider } from "./socket-provider";
import { AnswerMessageModel, AskMessageModel } from "../type";
import { useSelector } from "react-redux";

class GameProvider {
  userId: string = "";
  constructor(userId: string) {
    this.userId = userId;
    socketProvider.eventEmitter.on(MessageTypes.ASK, this.onAsk);
    socketProvider.eventEmitter.on(MessageTypes.ANSWER, this.onAnswer);
  }

  public init() {
    selfBoardProvider.init();
    enemyBoardProvider.init();
  }

  public ask(i: number, j: number) {
    socketProvider.sendMessage(MessageTypes.ASK, {
      userId: this.userId,
      i,
      j,
    });
  }

  private onAsk({ i, j }: AskMessageModel) {
    selfBoardProvider.checkAttack(i, j);
  }

  private onAnswer({ answerType }: AnswerMessageModel) {
    enemyBoardProvider.setAnswer(answerType);
  }
}

export default GameProvider;
