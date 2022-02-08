// test/pages/index.test.js

import React from "react";

// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../../test-utils";
import Films from "./index";

describe("Films component", () => {
  it("should render the heading", () => {
    render(<Films />);

    const heading = screen.getByText(
      /Films to Watch/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});