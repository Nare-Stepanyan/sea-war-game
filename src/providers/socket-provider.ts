import { Socket, io } from "socket.io-client";
import EventEmitter from "../helpers/event-emitter";

class SocketProvider {
  private socket: Socket | null = null;
  public eventEmitter: EventEmitter = new EventEmitter();

  constructor() {}
}

export const socketProvider = new SocketProvider();
