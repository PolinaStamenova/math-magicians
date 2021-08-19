import React from "react";
import renderer from "react-test-renderer";
import Calc from "./Calc";

it("expect calculator page to match working snapshot", () => {
  const calculatorPage = renderer.create(<Calc />).toJSON();
  expect(calculatorPage).toMatchSnapshot();
});
