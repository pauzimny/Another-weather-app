import React from "react";
import Options from "./Options.js";
import Settings from "../pages/Settings.js";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow, render } from "enzyme";

it("link to proper route", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/settings"]}>
      <Settings />
    </MemoryRouter>
  );
  expect(wrapper.find(Settings)).toHaveLength(1);
});

it("link to proper route", () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={["/settings"]}>
      <Settings />
    </MemoryRouter>
  );
  expect(wrapper.find(Settings)).toHaveLength(1);
});
