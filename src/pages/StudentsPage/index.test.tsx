import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Students from ".";

describe("Students", () => {
  it("should render without error", () => {
    renderComponent(<Students />);

    expectTextToBeInTheDocument("Students");
  });
});
