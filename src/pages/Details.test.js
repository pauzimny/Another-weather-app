import Details from "./Details.js";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import HomePage from "./HomePage.js";

it("link to proper route", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <Details />
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
});
