import React, { FC } from "react";
import { getCellClass, getCellContent } from "../../helpers/board-classess";
import { alphabet } from "../../helpers/utils";

type BoardProps = {
  handleCellClick: (i: number, j: number) => void;
  board: number[][];
};

const Board: FC<BoardProps> = ({ handleCellClick, board }) => {
  return (
    <div className="sea-war-board">
      <div className="board">
        <div className="row header">
          <div className="cell empty"></div>
          {alphabet.split("").map((letter, index) => (
            <div key={index} className="cell header">
              {letter}
            </div>
          ))}
        </div>

        {board.map((row, i) => (
          <div key={i} className="row">
            <div className="cell header">{i + 1}</div>
            {row.map((cell, j) => (
              <div
                key={j}
                className={`cell ${getCellClass(cell)}`}
                onClick={() => handleCellClick(i, j)}
              >
                {getCellContent(cell)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
