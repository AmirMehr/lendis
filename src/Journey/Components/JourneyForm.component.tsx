import { Box, Button, Card, CircularProgress, TextField } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { useState } from "react";
import { MAIN_URL } from "../../Common/Constants";
import { BLURRED_BG } from "../../Common/CSSObjects";
import Journey from "../../Models/Journey.model";
import Stop from "../../Models/Stop.model";
import StopAutocompleteComponent from "./StopAutocomplete.component";
import { plainToInstance } from "class-transformer";

export default function JourneyFormComponent(props: {
  setJournies: (journies: Journey[]) => void;
}) {
  const { setJournies } = props;
  const [startingPoint, setStartingPoint] = useState<Stop>();
  const [destinationPoint, setDestinationPoint] = useState<Stop>();
  const [startingPointError, setStartingPointError] = useState(false);
  const [destinationPointError, setDestinationPointError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Default value of selected time is for one hour later, It could be tommorow or anything else
  const [time, setTime] = useState(
    dayjs().set("hour", dayjs().get("hour") + 1)
  );

  const fetchJourneies = async () => {
    if (destinationPoint && startingPoint) {
      setJournies([]);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${MAIN_URL}journeys?from=${startingPoint.id}&to=${
            destinationPoint.id
          }&departure=${time.unix()}`
        );
        setIsLoading(false);
        setJournies(plainToInstance(Journey, response.data.journeys));
      } catch (e) {
        setIsLoading(false);
        setJournies([]);
      }
    }
  };

  const searchButtonClicked = () => {
    if (!startingPoint || !destinationPoint) {
      setStartingPointError(!startingPoint);
      setDestinationPointError(!destinationPoint);
      return;
    }
    fetchJourneies();
  };

  return (
    <Box
      id="journeyForm"
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        component={Card}
        sx={{
          m: 1,
          p: 3,
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "center",
          ...BLURRED_BG,
        }}
      >
        <StopAutocompleteComponent
          setPoint={setStartingPoint}
          label="Starting point"
          placeholder="Starting point"
          error={startingPointError}
        />
        <StopAutocompleteComponent
          setPoint={setDestinationPoint}
          label="Destination point"
          placeholder="Destination point"
          error={destinationPointError}
        />
        <Box sx={{ m: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={time}
              minDateTime={dayjs()}
              onChange={(newValue) => {
                setTime(newValue!);
              }}
            />
          </LocalizationProvider>
        </Box>
        {isLoading ? (
          <CircularProgress color="primary" />
        ) : (
          <Button
            onClick={searchButtonClicked}
            variant="outlined"
            size="medium"
          >
            Search Journies
          </Button>
        )}
      </Box>
    </Box>
  );
}
