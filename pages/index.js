import { Grid, Container } from "@mui/material";
import Head from "next/head";
import Sidebar from "../components/Home/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product feedback app</title>
      </Head>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            main content
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
