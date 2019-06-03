import HomePage from "./HomePage.js";
import React from "react";
import { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import sinon from "sinon";

it("renders correctly", () => {
  const wrapper = shallow(
    <HomePage
      submit={() => {}}
      change={() => {}}
      value={"london"}
      error={false}
      isAlready={false}
      citiesResults={[
        {
          id: "london",
          key: "london",
          number: "london",
          city: "london",
          temp: 12,
          delete: () => {},
          lat: 15,
          lon: 15,
          units: "metric",
          err: false
        }
      ]}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders correctly again", () => {
  const wrapper = render(
    <HomePage
      submit={() => {}}
      change={() => {}}
      value={"london"}
      error={false}
      isAlready={false}
      citiesResults={[
        {
          id: "london",
          key: "london",
          number: "london",
          city: "london",
          temp: 12,
          delete: () => {},
          lat: 15,
          lon: 15,
          units: "metric",
          err: false
        }
      ]}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

// it("calls handleSubmit on submit", () => {
//   const spy = sinon.spy();
//   const wrapper = mount(
//     <HomePage
//       submit={spy}
//       change={() => {}}
//       value={"london"}
//       error={false}
//       isAlready={false}
//       citiesResults={[
//         {
//           id: "london",
//           key: "london",
//           number: "london",
//           city: "london",
//           temp: 12,
//           delete: () => {},
//           lat: 15,
//           lon: 15,
//           units: "metric",
//           err: false
//         }
//       ]}
//     />
//   );

//   wrapper
//     .find("div")
//     .first()
//     .simulate("submit");

//   expect(spy.calledOnce).toBe(true);
// });
