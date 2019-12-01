/** @jsx jsx */
import { jsx } from "@emotion/core";
import Schedule from "./Schedule";
import MemberSelector from "./MemberSelector";

function App() {
  const Header = () => (
    <header
      css={{
        backgroundColor: "#282c34",
        minHeight: "4em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
      }}
    >
      Home Schedule
    </header>
  );
  return (
    <div
      css={{
        textAlign: "center"
      }}
    >
      <Header />
      <MemberSelector />
      <Schedule />
    </div>
  );
}

export default App;
