import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardSideSquareImageButton from ".";

describe("CardSideSquareImageButton", () => {
  it("should render without error", () => {
    renderComponent(
      <CardSideSquareImageButton
        text="CardSideSquareImageButton"
        title="titile"
        image=""
        buttonText=""
        onButtonClick={() => {}}
      />,
    );

    expectTextToBeInTheDocument("CardSideSquareImageButton");
  });
});
