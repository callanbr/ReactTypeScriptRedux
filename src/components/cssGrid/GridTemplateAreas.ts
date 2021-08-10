import { useWindowSize } from '../../hooks/useWindowSize';
import { gridTemplate } from './cssGrid.types';

const changeGridFormat = (gridArray: gridTemplate) => {
  if (gridArray !== undefined) {
    const gridArrayToString = JSON.stringify(gridArray);
    const removeCommas = gridArrayToString.replace(/,/g, ' ');
    const removeBrackets = removeCommas.replace(/\[|]/g, "'").slice(1, -1);
    const addAreaText = removeBrackets.replace(/\d/g, (match) => {
      return `area${match}`;
    });
    return addAreaText;
  }
};

export const GridTempStyle = (
  gridXS: gridTemplate,
  gridSM: gridTemplate,
  gridMD: gridTemplate,
  gridLG: gridTemplate,
  gridXL: gridTemplate
) => {
  const GridXS = {
    gridTemplateAreas: changeGridFormat(gridXS),
  };

  const GridSM = {
    gridTemplateAreas: changeGridFormat(gridSM),
  };

  const GridMD = {
    gridTemplateAreas: changeGridFormat(gridMD),
  };

  const GridLG = {
    gridTemplateAreas: changeGridFormat(gridLG),
  };

  const GridXL = {
    gridTemplateAreas: changeGridFormat(gridXL),
  };
  const size = useWindowSize();
  let GridTemplate;
  if (size.widthEM < 26) {
    GridTemplate = GridXS;
  } else if (size.widthEM < 48) {
    GridTemplate = GridSM;
  } else if (size.widthEM < 64) {
    GridTemplate = GridMD;
  } else if (size.widthEM < 80) {
    GridTemplate = GridLG;
  } else {
    GridTemplate = GridXL;
  }
  return GridTemplate;
};
