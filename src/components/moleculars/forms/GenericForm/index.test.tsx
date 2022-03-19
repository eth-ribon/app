import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import GenericForm from ".";

describe("GenericForm", () => {
  it("should render without error", () => {
    renderComponent(
      <GenericForm formFields={[]} onFormSubmit={() => {}} initialState={{}} />,
    );

    expectTextToBeInTheDocument("GenericForm");
  });
});
