import { render, screen } from "@testing-library/react";

import { App } from "../src/main";
import { expect } from "vitest";

describe("", () => {
  test("it should render app", () => {
    render(<App />);
    expect(screen.getByText("Hello from App")).toBeInTheDocument();
  });
});
