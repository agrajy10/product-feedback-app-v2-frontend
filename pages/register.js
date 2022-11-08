import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import useStyles from "../styles/LoginRegisterForm";

function Register() {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            <Typography component="h1" variant="h5" align="center" mb={3}>
              Register
            </Typography>
            <form className={classes.loginForm}>
              <Stack spacing={3}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
                <TextField
                  id="confirm-password"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disableElevation
                  size="large"
                >
                  Register
                </Button>
              </Stack>
            </form>
            <p className={classes.bottomText}>
              Already have an account?
              <Button
                variant="text"
                classes={{ root: classes.link }}
                disableRipple
              >
                Login
              </Button>
            </p>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Register;
