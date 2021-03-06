import Settings from "./Settings.js";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = shallow(
    <MemoryRouter>
      <Settings checked={"metric"} onChange={() => {}} onClick={() => {}} />
    </MemoryRouter>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders correctly again", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Settings checked={"metric"} onChange={() => {}} onClick={() => {}} />
    </MemoryRouter>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
