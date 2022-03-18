import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Home from ".";

describe("Home", () => {
  it("should render without error", () => {
    renderComponent(<Home />);

    expectTextToBeInTheDocument("Home");
  });
});
