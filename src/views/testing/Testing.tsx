import { Grid } from '../../components';
import { Drawer } from '../../components/drawer/Drawer';

const ToggleButton = (
  <Grid container>
    <Grid clickType="hover">X</Grid>
  </Grid>
);

// const ToggleButton = <span>X</span>;

export const Testing = () => {
  return (
    <>
      <div style={{ height: '150vh' }}>
        <h1>Testing</h1>
        <Drawer
          // ruler
          drawer={{
            position: 'fixed',
            location: 'top',
            hidden: true,
            size: 60,
          }}
          toggle={{
            children: ToggleButton,
            location: 'center',
            position: 'fixed',
          }}
        >
          <Grid breakpoint>Top</Grid>
        </Drawer>
        <Drawer
          // ruler
          drawer={{
            position: 'fixed',
            location: 'left',
            hidden: true,
            size: 300,
          }}
          toggle={{
            children: ToggleButton,
            location: 'center',
            position: 'fixed',
          }}
        >
          <Grid>Left</Grid>
          <Grid>Left</Grid>
          <Grid>Left</Grid>
          <Grid>Left</Grid>
        </Drawer>
        <Drawer
          // ruler
          drawer={{
            position: 'fixed',
            location: 'right',
            hidden: true,
            size: 300,
          }}
          toggle={{
            children: ToggleButton,
            location: 'top',
            position: 'fixed',
          }}
        >
          <Grid>Right</Grid>
          <Grid>Right</Grid>
          <Grid>Right</Grid>
          <Grid>Right</Grid>
        </Drawer>
        <Drawer
          // ruler
          drawer={{
            position: 'fixed',
            location: 'bottom',
            hidden: true,
            size: 300,
          }}
          toggle={{
            children: ToggleButton,
            location: 'center',
            position: 'fixed',
          }}
        >
          <Grid breakpoint>Bottom</Grid>
          <Grid breakpoint>Bottom</Grid>
          <Grid breakpoint>Bottom</Grid>
          <Grid breakpoint>Bottom</Grid>
          <Grid breakpoint>Bottom</Grid>
        </Drawer>
      </div>
    </>
  );
};
