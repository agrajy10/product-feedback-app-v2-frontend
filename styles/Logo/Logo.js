import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing }) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: spacing(18.5),
  },
}));

export default useStyles;
