import { Button, Card, CardContent } from "@mui/material";
import { Stack } from "@mui/system";

function UserLinks() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Button
            variant="contained"
            mb={2}
            fullWidth={true}
            size="large"
            disableElevation
          >
            Login
          </Button>
          <Button
            variant="outlined"
            fullWidth={true}
            size="large"
            disableElevation
          >
            Signup
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default UserLinks;
