import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { DepartmentProvider } from "./contexts/departmentContext";
import App from "./App";

const renderApp = (route = "/") =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <ChakraProvider>
        <DepartmentProvider>
          <App />
        </DepartmentProvider>
      </ChakraProvider>
    </MemoryRouter>
  );

test("renders without crashing on the home route", () => {
  renderApp();
});

test("renders the 404 page for an unknown route", async () => {
  renderApp("/this-route-does-not-exist");
  expect(await screen.findByText(/404/i)).toBeInTheDocument();
});
