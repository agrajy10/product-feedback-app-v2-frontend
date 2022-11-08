import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ palette, spacing }) => ({
  bottomText: {
    fontSize: "14px",
    textAlign: "center",
    margin: spacing(0),
  },
  loginForm: {
    marginBottom: spacing(2),
  },
  link: {
    paddingTop: 0,
    paddingBottom: 0,
    "&:hover": {
      color: palette.primary.light,
    },
  },
}));

export default useStyles