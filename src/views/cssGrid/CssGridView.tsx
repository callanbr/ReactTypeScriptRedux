import { Box } from '../../components/box/Box';
import { CssGrid } from '../../components/cssGrid/CssGrid';

export const CssGridView = () => {
  return (
    <>
      <h1>CSS Grid</h1>
      <p>1fr repeat by 6 (1-12)</p>
      <CssGrid container template="fr-6">
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
        <Box>Box 4</Box>
        <Box>Box 5</Box>
        <Box>Box 6</Box>
      </CssGrid>
      <p>1fr repeat by 3, gap (xGap, yGap, Gap)</p>
      <CssGrid container template="fr-3" gap="xs">
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
        <Box>Box 4</Box>
        <Box>Box 5</Box>
        <Box>Box 6</Box>
      </CssGrid>
    </>
  );
};
