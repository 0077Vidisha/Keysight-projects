import React from "react";
import FlightInfo from "./FlightInfo";

function App() {
  return (
    <div>
      <h1>Single Flight Details</h1>

      <FlightInfo
        airlineName="IndiGo"
        airlineCode="6E-203"
        seats={180}
        source="Delhi"
        destination="Mumbai"
        ticketPrice={5500}
      />
    </div>
  );
}

export default App;

