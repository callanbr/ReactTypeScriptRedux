import { Box } from '../../components/box/Box';
import { Grid } from '../../components/grid/Grid';

export const GridView = () => {
  return (
    <>
      <h1>12 column Grid!</h1>
      <Grid
        container
        spacing="md"
        justifyContent="center"
        alignItems="center"
        fullWidth
        ruler
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
      <br />
      <Grid
        container
        spacing="xs"
        justifyContent="center"
        ruler
        style={{
          minHeight: '200px',
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="start">
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="center">
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} alignSelf="end">
          <Box>Box 3</Box>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing="xl" justifyContent="center">
        <Grid item xs={12} sm={6} raised>
          <Box>Box 1</Box>
          <br />
          <Grid container>
            <Grid item col={6}>
              <Box>Box 2</Box>
            </Grid>
            <Grid item col={6}>
              <Box>Box 3</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
