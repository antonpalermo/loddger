import { render, screen } from "@testing-library/react";
import App from "../components/Application";

describe("main doc", () => {
  test("it should render app", () => {
    render(<App />);
    expect(screen.getByText("Hello from App")).toBeInTheDocument();
  });
});
