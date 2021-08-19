import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

it("expect quote page to match working snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
