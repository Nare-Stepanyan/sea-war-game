import React, { useEffect } from "react";
import { selfBoardProvider } from "../../providers/self-board-provider";
import { BoardEventTypes } from "../../constants";
import Board from "../board";

export const SelfBoard = () => {
  const [board, setBoard] = React.useState<number[][]>([]);

  useEffect(() => {
    return selfBoardProvider.eventEmitter.on(
      BoardEventTypes.ON_UPDATE,
      setBoard
    );
  }, []);

  const handleCellClick = (i: number, j: number) => {
    console.log(i, j, "i, j");
  };

  return <Board handleCellClick={handleCellClick} board={board} />;
};
