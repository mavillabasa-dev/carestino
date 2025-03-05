import { useEffect, useState } from "react";
import { Cell, Position } from "../types";

export const useGrid = () => {
  const [cells, setCells] = useState<Cell[][]>([]);
  const [color, setColor] = useState<string>("#FF0000");
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [colorPickerPosition, setColorPickerPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const calculateGrid = () => {
      const cellSize = window.innerWidth / 100;
      const rows = Math.floor(window.innerHeight / cellSize);
      const newCells: Cell[][] = Array.from({ length: rows }, () =>
        Array.from({ length: 100 }, () => ({ active: false, color: "#FFFFFF" }))
      );
      setCells(newCells);
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  const handleCellClick = (row: number, col: number) => {
    const newCells = [...cells];
    newCells[row][col].active = !newCells[row][col].active;
    newCells[row][col].color = color;
    setCells(newCells);
  };

  const handleCellRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setColorPickerPosition({ x: e.clientX, y: e.clientY });
    setShowColorPicker(true);
  };

  const handleColorSelect = (selectedColor: string) => {
    setColor(selectedColor);
    setShowColorPicker(false);
  };
  return {
    cells,
    showColorPicker,
    setShowColorPicker,
    colorPickerPosition,
    handleCellClick,
    handleCellRightClick,
    handleColorSelect,
  };
};
