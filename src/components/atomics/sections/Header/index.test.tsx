import { renderComponent } from "config/testUtils";
import { screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should render without error", () => {
    renderComponent(<Header />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});
