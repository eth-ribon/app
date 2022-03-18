import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ModalIcon from ".";

describe("ModalIcon", () => {
  it("should render without error", () => {
    renderComponent(<ModalIcon title="ModalIcon" visible />);

    expectTextToBeInTheDocument("ModalIcon");
  });
});
