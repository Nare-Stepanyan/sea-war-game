import { AnswerType } from "../constants";

export type User = {
  id?: string | null;
  name: string;
};

export type AskMessageModel = {
  userId: string;
  i: number;
  j: number;
};

export type AnswerMessageModel = {
  userId: string;
  answer: typeof AnswerType;
};
