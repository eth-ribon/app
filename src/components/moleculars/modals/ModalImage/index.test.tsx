import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ModalImage from ".";

describe("ModalImage", () => {
  it("should render without error", () => {
    renderComponent(<ModalImage title="ModalImage" visible />);

    expectTextToBeInTheDocument("ModalImage");
  });
});
