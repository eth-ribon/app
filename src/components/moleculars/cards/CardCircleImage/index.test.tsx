import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import CardCircleImage from ".";

describe("CardCircleImage", () => {
  it("should render without error", () => {
    renderComponent(<CardCircleImage image="" />);

    expect(screen.getByAltText("circle-img")).toBeInTheDocument();
  });
});
