import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing, palette }) => ({
  tag: {
    display: "inline-block",
    backgroundColor: palette.primary.main,
    color: palette.common.white,
    padding: spacing(0.5, 1.5),
    borderRadius: spacing(0.5),
    fontSize: "14px",
    marginBottom: spacing(1),
  },
  cardBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing(3),
  },
}));

export default useStyles;
