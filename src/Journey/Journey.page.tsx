import { useState } from "react";
import Journey from "../Models/Journey.model";
import JourneyFormComponent from "./Components/JourneyForm.component";
import JourniesListComponent from "./Components/JourniesList.component";

export default function JourneyPage() {
  const [journies, setJournies] = useState<Journey[]>([]);

  return (
    <>
      <JourneyFormComponent setJournies={setJournies} />
      <JourniesListComponent journies={journies} />
    </>
  );
}
