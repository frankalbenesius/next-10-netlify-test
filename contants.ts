export const dpi = 300;
export const posterWidth = 18 * dpi; // 18 inches wide
export const posterHeight = 24 * dpi; // 24 inches tall

export const squareSize = 656.25; // pixels
export const gridColumns = 8;
export const gridRows = 9;
export const gridWidth = squareSize * gridColumns;
export const gridHeight = squareSize * gridRows;

export const margin = (posterWidth - gridWidth) / 2;

export const headerWidth = gridWidth;
export const headerHeight = posterHeight - margin * 2 - gridHeight;
