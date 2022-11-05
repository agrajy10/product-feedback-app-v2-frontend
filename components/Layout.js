import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing, breakpoints }) => ({
  container: {
    padding: spacing(0, 0, 6, 0),
    [breakpoints.up("sm")]: {
      padding: spacing(6, 0),
    },
  },
}));

function Layout({ children }) {
  const { classes } = useStyles();

  return <div className={classes.container}>{children}</div>;
}

export default Layout;
