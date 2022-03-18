import React from "react";
import {
  clickOn,
  expectTextToBeInTheDocument,
  renderComponent,
} from "config/testUtils";
import Button from ".";

describe("<Button />", () => {
  it("renders the text", () => {
    renderComponent(<Button text="button" onClick={() => {}} />);

    expectTextToBeInTheDocument("button");
  });

  it("calls the passed function when clicked", () => {
    const mockFunction = jest.fn();
    renderComponent(<Button text="button" onClick={mockFunction} />);
    clickOn("button");

    expect(mockFunction).toHaveBeenCalled();
  });
});
