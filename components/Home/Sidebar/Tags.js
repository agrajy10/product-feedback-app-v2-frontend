import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function Tags() {
  return (
    <Card>
      <CardContent>
        <FormControl>
          <FormLabel id="tags-filter-label">Filter</FormLabel>
          <RadioGroup
            aria-labelledby="tags-filter-label"
            defaultValue="all"
            name="filter-group"
          >
            <FormControlLabel
              value="all"
              control={<Radio size="small" />}
              label="All"
            />
            <FormControlLabel value="ui" control={<Radio size="small" />} label="UI" />
            <FormControlLabel value="ux" control={<Radio size="small" />} label="UX" />
            <FormControlLabel
              value="enhancement"
              control={<Radio size="small" />}
              label="Enhancement"
            />
            <FormControlLabel
              value="feature"
              control={<Radio size="small" />}
              label="Feature"
            />
            <FormControlLabel value="bug" control={<Radio size="small" />} label="Bug" />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default Tags;
