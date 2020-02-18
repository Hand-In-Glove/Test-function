const { ballPool } = require("./ball_pool_problem");

test("time to mum is less than time to bully", () => {
  expect(ballPool(6, 6, 2, 1, false)).toBe("kid safe");
});

test("time to mum is greater than time to bully", () => {
  expect(ballPool(6, 6, 2, 1, true)).toBe("kid whacked");
});

test("time to mum is greater than time to bully", () => {
  expect(ballPool(6, 6, 2, 6, false)).toBe("kid whacked");
});

test("time to mum is greater than time to bully", () => {
  expect(ballPool(100, 100, 4, 5, false)).toBe("kid whacked");
});

test("time to mum is greater than time to bully", () => {
  expect(ballPool(0, 0, 0, 0, false)).toBe("kid whacked");
});

test("time to mum is less than time to bully", () => {
  expect(ballPool(50, 100, 4, 5, false)).toBe("kid safe");
});
