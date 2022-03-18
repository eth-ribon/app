import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Divider from ".";

describe("Divider", () => {
  it("should render without error", () => {
    renderComponent(<Divider text="Divider" />);

    expectTextToBeInTheDocument("Divider");
  });
});
