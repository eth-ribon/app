import React from "react";
import { renderComponent } from "config/testUtils";
import Loader from ".";

describe("Loader", () => {
  it("should render without error", () => {
    renderComponent(<Loader />);
  });
});
