import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import RegisterStudent from ".";

describe("RegisterStudent", () => {
  it("should render without error", () => {
    renderComponent(<RegisterStudent />);

    expectTextToBeInTheDocument("RegisterStudent");
  });
});
