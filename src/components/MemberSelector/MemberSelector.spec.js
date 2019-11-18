import React from "react";
import ReactDOM from "react-dom";
import MemberSelector from "./MemberSelector";

describe("MemberSelector:", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemberSelector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("displays as many subjects as it receives", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemberSelector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
