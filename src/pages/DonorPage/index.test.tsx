import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Donor from ".";

describe("Donor", () => {
  it("should render without error", () => {
    renderComponent(<Donor />);

    expectTextToBeInTheDocument("Donor");
  });
});
