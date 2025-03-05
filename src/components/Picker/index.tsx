import React from "react";
import { Position } from "../../types";

interface IColorPickerProps {
  position: Position;
  onSelectColor: (color: string) => void;
  onClose: () => void;
}

export const Picker = ({
  position,
  onClose,
  onSelectColor,
}: IColorPickerProps) => {
  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"];

  const pickerStyle: React.CSSProperties = {
    position: "absolute",
    left: position.x,
    top: position.y,
    display: "flex",
    gap: "5px",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 0.3s",
  };

  return (
    <div style={pickerStyle} onMouseLeave={onClose}>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: color,
            cursor: "pointer",
          }}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
};
