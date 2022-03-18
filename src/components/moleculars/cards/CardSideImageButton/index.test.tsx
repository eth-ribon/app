import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardSideImageButton from "./index";

describe("CardSideImageButton", () => {
  it("should render without error", () => {
    renderComponent(
      <CardSideImageButton
        buttonText="text"
        onClick={() => {}}
        icon=""
        title="title"
      />,
    );

    expectTextToBeInTheDocument("text");
  });
});
