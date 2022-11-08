import { Stack } from "@mui/system";
import Logo from "./Logo";
import Roadmap from "./Roadmap";
import Tags from "./Tags";
import UserLinks from "./UserLinks";

function Index() {
  return (
    <Stack spacing={2}>
      <Logo />
      <UserLinks />
      <Tags />
      <Roadmap />
    </Stack>
  );
}

export default Index;
