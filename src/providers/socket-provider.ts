import { Socket, io } from "socket.io-client";
import EventEmitter from "../helpers/event-emitter";
import { AnswerMessageModel, AskMessageModel } from "../type";
import { MessageTypes, MessagesEventTypes } from "../constants";

class SocketProvider {
  private socket: Socket | null = null;
  public eventEmitter: EventEmitter = new EventEmitter();

  public init() {
    this.socket = io("http://localhost:3000");

    this.socket.on(MessageTypes.ASK, this.onAsk);
    this.socket.on(MessageTypes.ANSWER, this.onAnswer);
  }

  private onAsk(askData: AskMessageModel) {
    this.eventEmitter.emit(MessagesEventTypes.ON_ASK, askData);
  }

  private onAnswer(answerData: AnswerMessageModel) {
    this.eventEmitter.emit(MessagesEventTypes.ON_ANSWER, answerData);
  }

  public sendMessage(type: string, data: AskMessageModel | AnswerMessageModel) {
    if (!this.socket) {
      console.log("Socket is not initialized!");
      return;
    }
    this.socket.emit(type, data);
  }
}

export const socketProvider = new SocketProvider();
