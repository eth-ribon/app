import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import RibonsSparkleNumber from ".";

describe("RibonsSparkleNumber", () => {
  it("should render without error", () => {
    renderComponent(<RibonsSparkleNumber ribons={100} />);

    expectTextToBeInTheDocument("100");
  });
});
