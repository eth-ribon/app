import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ModalBlank from ".";

describe("ModalBlank", () => {
  it("should render without error", () => {
    renderComponent(
      <ModalBlank visible>
        <div>blank</div>
      </ModalBlank>,
    );

    expectTextToBeInTheDocument("blank");
  });
});
