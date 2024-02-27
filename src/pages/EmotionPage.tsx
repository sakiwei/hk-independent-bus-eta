import React, { useCallback, useContext, useState } from "react";
import EmotionContext from "../EmotionContext";
import { Box, Paper, SxProps, Theme } from "@mui/material";
import EmotionTabbar, {
  EmotionTabType,
} from "../components/emotion/EmotionTabbar";
import CheckIn from "../components/emotion/CheckIn";
import EmotionChart from "../components/emotion/EmotionChart";

const EmotionPage = () => {
  const { isRemind } = useContext(EmotionContext);
  const [tab, setTab] = useState<EmotionTabType>(
    isRemind ? "check in" : "chart"
  );

  const onCheckInDone = useCallback(() => {
    setTab("chart");
  }, []);

  return (
    <Paper sx={paperSx}>
      <EmotionTabbar value={tab} onChange={(v) => setTab(v)} />
      <Box overflow="auto">
        {tab === "check in" && <CheckIn onFinish={onCheckInDone} />}
        {tab === "chart" && <EmotionChart />}
      </Box>
    </Paper>
  );
};

export default EmotionPage;

const paperSx: SxProps<Theme> = {
  background: (theme) =>
    theme.palette.mode === "dark" ? theme.palette.background.default : "white",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  overflow: "none",
  width: "100%",
  height: "100%",
};
