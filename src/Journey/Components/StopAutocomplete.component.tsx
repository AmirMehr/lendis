import { Autocomplete, Box, TextField } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MAIN_URL } from "../../Common/Constants";
import Stop from "../../Models/Stop.model";
import { plainToInstance } from "class-transformer";

export default function StopAutocompleteComponent(props: {
  label: string;
  placeholder: string;
  setPoint: (point: Stop) => void;
  error: boolean;
}) {
  const { label, placeholder, setPoint, error } = props;
  const [loading, setLoading] = useState(false);
  const [stops, setStops] = useState<Stop[]>([]);
  const [query, setQuery] = useState("");
  const [inputError, setInputError] = useState(error);

  useEffect(() => {
    setInputError(error);
  }, [error]);

  const getStops = useCallback(async () => {
    setStops([]);
    try {
      const response = await axios.get(
        `${MAIN_URL}locations?poi=false&addresses=false&query=${query}`
      );
      setStops(plainToInstance(Stop, response.data));
    } catch (e) {
      setStops([]);
    }
  }, [query]);

  useEffect(() => {
    if (loading) {
      getStops().then(() => setLoading(false));
    }
  }, [loading, getStops]);

  const handleChange = (value: string) => {
    setQuery(value);
    setLoading(true);
    setInputError(false);
  };

  return (
    <Box sx={{ margin: "8px 0", width: "100%" }}>
      <Autocomplete
        isOptionEqualToValue={(option, value) => option.id === value.id}
        noOptionsText={"Enter the name of area you want"}
        options={stops}
        size="small"
        getOptionLabel={(stop) => stop.name}
        onChange={(_, v) => {
          setPoint(v!);
        }}
        onInputChange={(_, value) => {
          handleChange(value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            error={inputError}
            placeholder={placeholder}
          />
        )}
        renderOption={(props, stop) => (
          <Box component="li" {...props} key={stop.id}>
            {stop.name}
          </Box>
        )}
      />
    </Box>
  );
}
