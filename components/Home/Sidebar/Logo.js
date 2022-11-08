import { Card, CardContent, Typography } from "@mui/material";
import useStyles from "../../../styles/Logo/Logo";

function Logo() {
  const { classes } = useStyles();
  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography variant="h6" component="h1">
          Product feedback board
        </Typography>
        <Typography variant="p" color="text.secondary">
          Lorem ipsum dolo sit.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Logo;
