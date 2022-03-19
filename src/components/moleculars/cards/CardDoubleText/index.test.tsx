import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardIconText from ".";

describe("CardIconText", () => {
  it("renders the passed text", () => {
    renderComponent(<CardIconText title="text" subtitle="subtitle" icon="" />);

    expectTextToBeInTheDocument("CardIconText");
  });

  describe("when a right component is passed", () => {
    it("renders the right component", () => {
      renderComponent(
        <CardIconText
          title="text"
          subtitle="subtitle"
          icon=""
          rightComponent={<div>test</div>}
        />,
      );

      expectTextToBeInTheDocument("test");
    });
  });
});
