import React from "react";
import Form from "./Form.js";
import { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = shallow(
    <Form onSubmit={() => {}} value="london" onChange={() => {}} />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders correctly again", () => {
  const wrapper = mount(
    <Form onSubmit={() => {}} value="london" onChange={() => {}} />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
