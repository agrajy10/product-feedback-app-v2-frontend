import { Button, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

import useStyles from "../../../styles/Roadmap/Roadmap";

function Roadmap() {
  const { classes } = useStyles();

  return (
    <Card>
      <CardContent>
        <div className={classes.cardHeader}>
          <Typography variant="body1" component="h2">
            Roadmap
          </Typography>
          <Button disableRipple p={0} classes={{ root: classes.viewLink }}>
            View
          </Button>
        </div>
        <ul className={classes.list}>
          <li>
            Planned <span>6</span>
          </li>
          <li>
            In-Progress <span>4</span>
          </li>
          <li>
            Live <span>2</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default Roadmap;
