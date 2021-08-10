import { Box } from '../../components/box/Box';
import { FlexGrid } from '../../components/flexGrid/FlexGrid';

export const FlexGridView = () => {
  return (
    <>
      <h1>12 column Flex Grid!</h1>
      <FlexGrid
        container
        spacing="md"
        justifyContent="center"
        alignItems="center"
        fullWidth
      >
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 1</Box>
        </FlexGrid>
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 2</Box>
        </FlexGrid>
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 3</Box>
        </FlexGrid>
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 4</Box>
        </FlexGrid>
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 5</Box>
        </FlexGrid>
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 6</Box>
        </FlexGrid>
      </FlexGrid>
      <br />
      <FlexGrid
        container
        spacing="xs"
        justifyContent="center"
        ruler
        style={{
          minHeight: '200px',
        }}
      >
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="start">
          <Box>Box 1</Box>
        </FlexGrid>
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="center">
          <Box>Box 2</Box>
        </FlexGrid>
        <FlexGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="end">
          <Box>Box 3</Box>
        </FlexGrid>
      </FlexGrid>
      <br />
      <FlexGrid container spacing="xl" justifyContent="center">
        <FlexGrid item xs={12} sm={6} raised>
          <Box>Box 1</Box>
          <br />
          <FlexGrid container>
            <FlexGrid item col={6}>
              <Box>Box 2</Box>
            </FlexGrid>
            <FlexGrid item col={6}>
              <Box>Box 3</Box>
            </FlexGrid>
          </FlexGrid>
        </FlexGrid>
      </FlexGrid>
    </>
  );
};
