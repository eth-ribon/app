import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Carousel from ".";

describe("Carousel", () => {
  it("should render without error", () => {
    renderComponent(
      <Carousel>
        <div>1</div>
        <div>2</div>
      </Carousel>,
    );

    expectTextToBeInTheDocument("1");
  });
});
