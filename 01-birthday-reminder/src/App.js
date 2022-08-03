import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [birthDays, setBirthDays] = useState(data);

  return (
    <main>
      <List data={birthDays} setBirthDays={setBirthDays} />
    </main>
  );
}

export default App;
