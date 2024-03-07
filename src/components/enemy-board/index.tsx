import React, { useEffect } from "react";
import { BoardEventTypes } from "../../constants";
import { enemyBoardProvider } from "../../providers/enemy-board-provider";
import GameProvider from "../../providers/game-provider";
import { useAppSelector } from "../app/hook";
import { selectUser } from "../../store/user/userSlice";
import { getCellClass, getCellContent } from "../../helpers/board-classess";
import { alphabet } from "../../helpers/utils";
import Board from "../board";

export const EnemyBoard = () => {
  const user = useAppSelector(selectUser);
  const [board, setBoard] = React.useState<number[][]>([]);
  const gameProvider = new GameProvider(user?.id);

  useEffect(() => {
    return enemyBoardProvider.eventEmitter.on(
      BoardEventTypes.ON_UPDATE,
      setBoard
    );
  }, []);

  const onClick = (i: number, j: number) => {
    gameProvider.ask(i, j);
  };

  const handleCellClick = (i: number, j: number) => {
    console.log(i, j, "i, j , enemy");
  };

  return <Board handleCellClick={handleCellClick} board={board} />;
};
