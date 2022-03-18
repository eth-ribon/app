import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardFullImage from ".";

describe("CardFullImage", () => {
  it("should render without error", () => {
    renderComponent(
      <CardFullImage roundImage="" title="CardFullImage" backgroundImage="" />,
    );

    expectTextToBeInTheDocument("CardFullImage");
  });
});
