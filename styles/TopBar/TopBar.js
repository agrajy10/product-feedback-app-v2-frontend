import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing }) => ({
  cardContent: {
    padding: spacing(1.5, 2),
    "&:last-child": {
      paddingBottom: spacing(1.5),
    },
  },
}));

export default useStyles;
