import React from "react";
import Result from "./Result.js";
import { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = shallow(
    <Result
      city={"london"}
      temp={18}
      units={"metric"}
      onClick={() => {}}
      id={2}
    />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
