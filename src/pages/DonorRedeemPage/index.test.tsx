import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import DonorRedeem from ".";

describe("DonorRedeem", () => {
  it("should render without error", () => {
    renderComponent(<DonorRedeem />);

    expectTextToBeInTheDocument("DonorRedeem");
  });
});
