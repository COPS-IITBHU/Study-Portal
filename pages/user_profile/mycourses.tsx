import { Grid } from "@nextui-org/react";
import { Card4 } from './card';


export default function App() {
  return (
    <Grid.Container gap={5} justify="center">
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
    </Grid.Container>
  );
}
