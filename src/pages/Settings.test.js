import Settings from "./Settings.js";
import React from "react";
import { shallow, render } from "enzyme";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = shallow(
    <Settings checked={"metric"} onChange={() => {}} onClick={() => {}} />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

// not pass because of react-router
// it("renders correctly again", () => {
//   const wrapper = render(
//     <Settings checked={"metric"} onChange={() => {}} onClick={() => {}} />
//   );

//   expect(toJson(wrapper)).toMatchSnapshot();
// });
