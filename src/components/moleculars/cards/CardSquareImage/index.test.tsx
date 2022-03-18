import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import CardSquareImage from ".";

describe("CardSquareImage", () => {
  it("should render without error", () => {
    renderComponent(<CardSquareImage image="https://picsum.photos/600/600" />);
    expect(screen.getByAltText("square-img")).toBeInTheDocument();
  });
});
