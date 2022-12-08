import { Box, Card, Divider, Grid } from "@mui/material";
import { BLURRED_BG } from "../../Common/CSSObjects";
import Journey from "../../Models/Journey.model";
import Leg from "../../Models/Leg.model";
import dayjs from "dayjs";

export default function JourneyComponent(props: { journey: Journey }) {
  const { journey } = props;
  const leg: Leg = journey.legs[0];
  const date = dayjs(leg.departure).format("DD/MM/YYYY").toString();
  const time = dayjs(leg.departure).format("HH:mm").toString();
  return (
    <Grid item xs={12} lg={6} sx={{ display: "flex" }}>
      <Box
        component={Card}
        sx={{
          p: 3,
          flexGrow: "1",
          ...BLURRED_BG,
          transition: "0.33s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#fff",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <b>{leg.origin.name}</b> to <b>{leg.destination.name}</b>
        </Box>
        <Divider />
        <br />
        Departure Date:
        <b> {date}</b>
        <br />
        Departure Time:
        <b> {time}</b>
        <br />
        Departure Delay:{" "}
        <b>
          {leg.departureDelay ? `${leg.departureDelay} minute(s)` : "On time"}
        </b>
        <br />
      </Box>
    </Grid>
  );
}
