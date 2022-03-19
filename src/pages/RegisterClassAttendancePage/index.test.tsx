import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import RegisterClassAttendance from ".";

describe("RegisterClassAttendance", () => {
  it("should render without error", () => {
    renderComponent(<RegisterClassAttendance />);

    expectTextToBeInTheDocument("RegisterClassAttendance");
  });
});
