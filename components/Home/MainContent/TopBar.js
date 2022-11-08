import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import useStyles from "../../../styles/TopBar/TopBar";

function TopBar() {
  const { classes } = useStyles();
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Card>
      <CardContent classes={{ root: classes.cardContent }}>
        <Grid container alignItems="center" columnSpacing={3} rowSpacing={3}>
          <Grid item xs="auto">
            <Typography variant="body1" component="span">
              11 Suggestions
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="sort-by-select-label">Sort by</InputLabel>
              <Select
                labelId="sort-by-select-label"
                id="demo-simple-select"
                value={sortBy}
                label="Sort by"
                onChange={handleChange}
              >
                <MenuItem value={10}>Most upvotes</MenuItem>
                <MenuItem value={20}>Least upvotes</MenuItem>
                <MenuItem value={30}>Most comments</MenuItem>
                <MenuItem value={40}>Least comments</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md
            sx={{ display: { xs: "none", md: "block" } }}
          ></Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              disableElevation
              fullWidth={true}
            >
              Add feedback
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TopBar;
