import { Box } from '../../components/box/Box';
import { Grid } from '../../components/grid/Grix';

export const GridView = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h1>12 column Grid!</h1>
      <Grid
        container
        spacing="xs"
        justifyContent="center"
        alignItems="center"
        style={{ height: '200px', border: '2px solid black' }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 4</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 5</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 6</Box>
        </Grid>
      </Grid>
    </div>
  );
};
