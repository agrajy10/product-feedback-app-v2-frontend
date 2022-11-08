import { Button, Card, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useStyles from "../styles/FeedbackCard/FeedbackCard";

function FeedbackCard() {
  const { classes } = useStyles();
  return (
    <Card component="article">
      <CardContent classes={{ root: classes.cardContent }}>
        <span className={classes.tag}>Feature</span>
        <Typography variant="h6" component="h2" mb={0.5}>
          Bookmark challenges
        </Typography>
        <Typography mb={2} color={grey[700]}>
          Be able to bookmark challenges to take later on.
        </Typography>

        <div className={classes.cardBottom}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<KeyboardArrowUpIcon />}
          >
            2
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<ChatBubbleOutlineIcon />}
          >
            3
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default FeedbackCard;
