import { Grid, Container } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product feedback app</title>
      </Head>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            sidebar
          </Grid>
          <Grid item xs={12} md={9}>
            main content
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
