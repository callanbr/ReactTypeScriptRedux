import { Box } from '../../components/box/Box';
import { CssGrid } from '../../components/cssGrid/CssGrid';

export const CssGridView = () => {
  return (
    <>
      <h1>CSS Grid</h1>
      <p>1fr repeat (1-12)</p>
      <CssGrid container gap="xs" xs={1} sm={3} md={4} lg={6} xl={12}>
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
        <Box>Box 4</Box>
        <Box>Box 5</Box>
        <Box>Box 6</Box>
        <Box>Box 7</Box>
        <Box>Box 8</Box>
        <Box>Box 9</Box>
        <Box>Box 10</Box>
        <Box>Box 11</Box>
        <Box>Box 12</Box>
      </CssGrid>
      <br />
      <p>gap (xGap, yGap, Gap)</p>
      <CssGrid container template="fr-3" gap="xs">
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
        <Box>Box 4</Box>
        <Box>Box 5</Box>
        <Box>Box 6</Box>
      </CssGrid>
      <br />
      <p>width 1-100%</p>
      <CssGrid container gap="xs" xs={3} lg={6} width={80}>
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
        <Box>Box 4</Box>
        <Box>Box 5</Box>
        <Box>Box 6</Box>
      </CssGrid>
      <br />
      <p>layout</p>
      <CssGrid
        container
        gap="xs"
        gridTemplate
        gridXS={[[1], [2], [3], [4], [5], [6]]}
        gridSM={[
          [1, 1],
          [2, 3],
          [4, 5],
          [6, 6],
        ]}
        gridMD={[
          [1, 2],
          [3, 4],
          [5, 6],
        ]}
        gridLG={[
          [1, 1, 2],
          [3, 4, 2],
          [3, 5, 5],
          [3, 5, 5],
          [6, 6, 6],
        ]}
        gridXL={[
          [1, 1, 2, 2],
          [3, 4, 2, 2],
          [3, 5, 5, 5],
          [3, 5, 5, 5],
          [3, 6, 6, 6],
        ]}
      >
        <CssGrid item area={1}>
          <Box>Box 1</Box>
        </CssGrid>
        <CssGrid item area={2}>
          <Box>Box 2</Box>
        </CssGrid>
        <CssGrid item area={3}>
          <Box>Box 3</Box>
        </CssGrid>
        <CssGrid item area={4}>
          <Box>Box 4</Box>
        </CssGrid>
        <CssGrid item area={5}>
          <Box>Box 5</Box>
        </CssGrid>
        <CssGrid item area={6}>
          <Box>Box 6</Box>
        </CssGrid>
      </CssGrid>
    </>
  );
};
