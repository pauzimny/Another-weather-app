import React from "react";
import Message from "./Message.js";
import { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = shallow(<Message msg={"You hava some message"} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders correctly", () => {
  const wrapper = render(<Message msg={"You hava some message"} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders correctly", () => {
  const wrapper = mount(<Message msg={"You hava some message"} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
