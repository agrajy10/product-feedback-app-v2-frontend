import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ palette, spacing }) => ({
  bottomText: {
    fontSize: "14px",
    textAlign: "center",
    margin:spacing(0)
  },
  loginForm : {
    marginBottom:spacing(2)
  },
  link: {
    paddingTop: 0,
    paddingBottom: 0,
    "&:hover": {
      color: palette.primary.light,
    },
  },
}));

function Login() {
  const { classes } = useStyles();
  return (
    <Container maxWidth="xs">
      <Card>
        <CardContent>
          <Typography component="h1" variant="h5" align="center" mb={3}>
            Login
          </Typography>
          <form className={classes.loginForm}>
            <Stack spacing={3}>
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
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disableElevation
                size="large"
              >
                Login
              </Button>
            </Stack>
          </form>
          <p className={classes.bottomText}>
            <Button
              variant="text"
              classes={{ root: classes.link }}
              disableRipple
            >
              Forgot password?
            </Button>
          </p>
          <p className={classes.bottomText}>
            Don't have an account?
            <Button
              variant="text"
              classes={{ root: classes.link }}
              disableRipple
            >
              Register
            </Button>
          </p>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;