import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing, palette }) => ({
    cardHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: spacing(2),
    },
    viewLink: {
      minWidth: "unset",
      padding: 0,
    },
    list: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      fontSize: "14px",
      "& li": {
        flex: "1 1 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        paddingLeft: spacing(2),
        "&::before": {
          content: '""',
          display: "inline-block",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: palette.category.planned,
          position: "absolute",
          left: 0,
        },
      },
      "& li:nth-of-type(2)": {
        "&::before": {
          backgroundColor: palette.category.inProgress,
        },
      },
      "& li:nth-of-type(3)": {
        "&::before": {
          backgroundColor: palette.category.live,
        },
      },
      "& li:not(:last-child)": {
        marginBottom: spacing(1),
      },
      "& span": {
        fontWeight: 700,
      },
    },
  }));

  export default useStyles