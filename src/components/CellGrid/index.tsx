import { useGrid } from "../../hooks";
import { Grid } from "../Grid";
import { Picker } from "../Picker";

export const CellGrid = () => {
  const {
    cells,
    handleCellClick,
    handleCellRightClick,
    handleColorSelect,
    colorPickerPosition,
    showColorPicker,
    setShowColorPicker,
  } = useGrid();

  return (
    <div>
      <Grid
        cells={cells}
        onCellClick={handleCellClick}
        onCellRightClick={handleCellRightClick}
      />
      {showColorPicker && (
        <Picker
          position={colorPickerPosition}
          onSelectColor={handleColorSelect}
          onClose={() => setShowColorPicker(false)}
        />
      )}
    </div>
  );
};
