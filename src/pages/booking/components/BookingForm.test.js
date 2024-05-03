import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const linkElement = screen.getByText("Reserve a table");
  expect(linkElement).toBeInTheDocument();
});
