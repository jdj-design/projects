import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    // Arrange
    render(<App />);
  });

  test("Renders the App", () => {
    // Act
    //   No Act steps needed
    // Assert
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  test("Renders the button", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });

  test("Increments the count on button click", () => {
    // Act
    //   Click the increment button
    fireEvent.click(screen.getByText("count is 0"));

    // Assert
    //   Check if the count is now 1
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
});