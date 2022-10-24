import { multiply, lowerCase } from "./index";

test("multiply", () => {
  expect(multiply(3, 3)).toBe(9);
  expect(multiply(5, -4)).toBe(-20);
  expect(multiply("a", 5)).toBe(NaN);
  expect(multiply(-3, -3)).toBe(9);
});

test("lowerCase", () => {
  expect(lowerCase("Rokas")).toBe("rokas");
  expect(lowerCase("DOG")).toBe("dog");
  expect(lowerCase("cat")).toBe("cat");
  expect(lowerCase("KiNg")).toBe("king");
});
