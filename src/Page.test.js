import Page from "./Page.js";
import HomePage from "./pages/HomePage.js";
import Error from "./pages/Error.js";
import { MemoryRouter } from "react-router-dom";

import React from "react";
import { mount } from "enzyme";

it("invalid path should redirect to 404", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/random"]}>
      <Page />
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(0);
  expect(wrapper.find(Error)).toHaveLength(1);
});

it("valid path should not redirect to 404", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <Page />
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
  expect(wrapper.find(Error)).toHaveLength(0);
});
