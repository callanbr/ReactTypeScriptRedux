import { Box } from '../../components/box/Box';
import { NewGrid } from '../../components/newGrid/NewGrid';

export const NewGridView = () => {
  return (
    <NewGrid
      container
      spacing="xl"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '500px', border: '2px solid black' }}
    >
      <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="start">
        <Box>Box 1</Box>
      </NewGrid>
      <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="center">
        <Box>Box 2</Box>
      </NewGrid>
      <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="end">
        <Box>Box 3</Box>
      </NewGrid>
      <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Box>Box 4</Box>
      </NewGrid>
      <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Box>Box 5</Box>
      </NewGrid>
      <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Box>Box 6</Box>
      </NewGrid>
      <NewGrid item xl={12}>
        <NewGrid
          container
          spacing="xs"
          justifyContent="center"
          // alignItems="center"
          style={{
            minHeight: '200px',
            border: '2px solid black',
          }}
        >
          <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="start">
            <Box>Box 1</Box>
          </NewGrid>
          <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="center">
            <Box>Box 2</Box>
          </NewGrid>
          <NewGrid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="end">
            <Box>Box 3</Box>
          </NewGrid>
        </NewGrid>
      </NewGrid>
    </NewGrid>
  );
};
