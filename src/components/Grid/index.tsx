import { Cell } from "../../types";

interface IGridProps {
  cells: Cell[][];
  onCellClick: (row: number, col: number) => void;
  onCellRightClick: (e: React.MouseEvent, row: number, col: number) => void;
}

export const Grid = ({ cells, onCellClick, onCellRightClick }: IGridProps) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(100, 1fr)`,
    gridTemplateRows: `repeat(auto-fit, minmax(10px, 1fr))`,
    gap: "1px",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  };

  return (
    <div style={gridStyle}>
      {cells.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          return (
            <div
              key={`${rowIndex}-${columnIndex}`}
              style={{
                backgroundColor: cell.active ? cell.color : "#fff",
                border: "1px solid #ccc",
              }}
              onClick={() => onCellClick(rowIndex, columnIndex)}
              onContextMenu={(e) => {
                e.preventDefault();
                onCellRightClick(e, rowIndex, columnIndex);
              }}
            />
          );
        })
      )}
    </div>
  );
};
