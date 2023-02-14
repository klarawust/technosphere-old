import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const tittel = screen.getByText(/Mine venner/i);
  expect(tittel).toBeInTheDocument();
});
