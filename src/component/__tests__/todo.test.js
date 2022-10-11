import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";
afterEach(() => {
  cleanup();
});
test("should render  todo 1 compnent", () => {
  const datas = {
    id: 1,
    title: "Hello world",
    completed: false,
  };
  render(<Todo data={datas} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Hello world");
});
test("should render todo 2 compnent", () => {
  const datas = {
    id: 2,
    title: "Hello world 2",
    completed: false,
  };
  render(<Todo data={datas} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Hello world 2");
  expect(todoElement).not.toContainHTML("<strike>");
});
test("should render todo 3 compnent", () => {
  const datas = {
    id: 3,
    title: "Hello world 3",
    completed: true,
  };
  render(<Todo data={datas} />);
  const todoElement = screen.getByTestId("todo-3");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Hello world 3");
  expect(todoElement).toContainHTML("<strike>");
});

test("take a snap shot", () => {
  const datas = {
    id: 1,
    title: "Hello world",
    completed: false,
  };
  const { asFragment } = render(<Todo data={datas} />);
  expect(asFragment()).toMatchSnapshot();
});
