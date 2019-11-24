import React from "react";
import "./App.css";
import Schedule from "../Schdule/Schedule";
import MemberSelector from "../MemberSelector/MemberSelector";

function App() {
  return (
    <div className="App">
      <header className="App-header">Home Schedule</header>
      <MemberSelector />
      <Schedule subject="wea" />
    </div>
  );
}

export default App;
