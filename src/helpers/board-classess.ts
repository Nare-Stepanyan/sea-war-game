export const getCellClass = (cell: number) => {
  switch (cell) {
    case 0:
      return "empty-cell";
    case 1:
      return "ship-cell";
    case 2:
      return "hit-cell";
    case 3:
      return "miss-cell";
    default:
      return "";
  }
};

export const getCellContent = (cell: number) => {
  switch (cell) {
    case 0:
      return "";
    case 1:
      return "";
    case 2:
      return "X";
    case 3:
      return "-";
    default:
      return "";
  }
};
