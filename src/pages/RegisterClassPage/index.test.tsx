import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import RegisterClass from ".";

describe("RegisterClass", () => {
  it("should render without error", () => {
    renderComponent(<RegisterClass />);

    expectTextToBeInTheDocument("RegisterClass");
  });
});
