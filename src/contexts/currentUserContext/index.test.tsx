import React from "react";
import { render, screen } from "@testing-library/react";
import { useCurrentUser } from ".";

function CurrentUserTestPage() {
  useCurrentUser();
  return <div>CurrentUser</div>;
}

describe("useCurrentUser", () => {
  it("should render without error", () => {
    render(<CurrentUserTestPage />);
    expect(screen.getByText("CurrentUser")).toBeInTheDocument();
  });
});
