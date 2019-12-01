import React from "react";
import App from "../App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../reducers/index";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {SCHEDULE_ROWS} from "../../data/schedule"

import { getScheduleMembersId } from "../../selectors/schedule";

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

let container;
let getAllByTestId;
let getByTestId;
let getByText;

describe("App: ", () => {
  test("renders with redux with defaults", () => {
    ({ container } = renderWithRedux(<App />));
    expect(container).toBeInTheDocument();
  });

  test("renders a title for the application", () => {
    ({ getByText } = renderWithRedux(<App />));
    expect(getByText("Home Schedule")).toBeInTheDocument();
  });
});

describe("MemberSelector: ", () => {
  test("renders a button for each member to select their calendar", () => {
    ({ container, getByTestId } = renderWithRedux(<App />));
    expect(getScheduleMembersId().length).toBeGreaterThan(0);
    getScheduleMembersId().forEach(member => {
      expect(getByTestId(`member-${member}`)).toBeInTheDocument();
    });
  });
});

describe("Schedule: ", () => {
  test("renders all a row with member name and all tasks for all member by default", () => {
    ({ getAllByTestId } = renderWithRedux(<App />));
    expect(getAllByTestId("member").length).toBe(4);
    expect(getAllByTestId("task").length).toBe(4 * 6);
  });

  test("when clicking a member, it displays it s current task", () => {
    ({ getAllByTestId, getByTestId } = renderWithRedux(<App />));
    fireEvent.click(getByTestId("member-Xavi"));
    expect(getAllByTestId("member").length).toBe(1);
    expect(getAllByTestId("task").length).toBe(1);
  });

  test("after clicking a member, click the full schedule restores the whole schedule", () => {
    ({ getAllByTestId, getByTestId, getByText } = renderWithRedux(<App />));
    fireEvent.click(getByTestId("member-Xavi"));
    fireEvent.click(getByText("Full schedule"));
    expect(getAllByTestId("member").length).toBe(4);
    expect(getAllByTestId("task").length).toBe(4 * 6);
  });
});
