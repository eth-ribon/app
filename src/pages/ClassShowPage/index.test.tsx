import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ClassShow from ".";

describe("ClassShow", () => {
  it("should render without error", () => {
    renderComponent(<ClassShow />);

    expectTextToBeInTheDocument("ClassShow");
  });
});
