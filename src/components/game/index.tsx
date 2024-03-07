import React, { useEffect } from "react";
import GameProvider from "../../providers/game-provider";
import { SelfBoard } from "../self-board";
import { EnemyBoard } from "../enemy-board";
import { useAppSelector } from "../app/hook";
import { selectUser } from "../../store/user/userSlice";

const Game = () => {
  const user = useAppSelector(selectUser);
  useEffect(() => {
    const gameProvider = new GameProvider(user?.id);
    gameProvider.init();
  }, []);

  return (
    <div className="boards">
      <div>
        <h1>Your board</h1>
        <SelfBoard />
      </div>
      <div>
        <h1>Enemy board</h1>
        <EnemyBoard />
      </div>
    </div>
  );
};

export default Game;
