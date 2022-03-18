import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ModalError from ".";

describe("ModalError", () => {
  it("should render without error", () => {
    renderComponent(<ModalError title="ModalError" visible />);

    expectTextToBeInTheDocument("ModalError");
  });
});
