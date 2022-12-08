import { Box, Card, Grid, Typography } from "@mui/material";
import { BLURRED_BG } from "../../Common/CSSObjects";
import Journey from "../../Models/Journey.model";
import JourneyComponent from "./Journey.component";

export default function JourniesList(props: { journies: Journey[] }) {
  const { journies } = props;

  return (
    <>
      {journies.length == 0 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            p: "8px 0",
          }}
        >
          <Card
            sx={{
              maxWidth: "780px",
              width: "100%",
              height: "110px",
              p: 3,
              ...BLURRED_BG,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#999",
                fontSize: "1.2rem",
              }}
            >
              No Journeies Found, Please Change Inputs Then Search Again.
            </Typography>
          </Card>
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: "1280px", width: "100%" }}
          >
            {journies.map((journy, index) => {
              return <JourneyComponent key={index} journey={journy} />;
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}
