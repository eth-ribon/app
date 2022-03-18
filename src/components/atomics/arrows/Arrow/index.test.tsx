import React from "react";
import { renderComponent } from "config/testUtils";
import Arrow from ".";

describe("Arrow", () => {
  it("should render without error", () => {
    const result = renderComponent(
      <Arrow direction="left" onClick={() => {}} disabled={false} />,
    );

    expect(
      result.component.container.querySelector("#arrow-left"),
    ).toBeInTheDocument();
  });
});
