import { Stack } from "@mui/system";
import FeedbackCard from "../../FeedbackCard";
import TopBar from "./TopBar";

function Index() {
  return (
    <Stack spacing={2}>
      <TopBar />
      <FeedbackCard />
    </Stack>
  );
}

export default Index;
