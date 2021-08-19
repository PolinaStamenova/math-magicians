import operate from "../logic/operate";

describe("Operators", () => {
  it("test if 2 + 2 = 4", () => {
    const x = 2;
    const y = 2;

    const result = operate(x, y, "+");

    expect(result).toBe("4");
  });

  it("test if 4 - 1 = 3", () => {
    const x = 4;
    const y = 1;

    const result = operate(x, y, "-");

    expect(result).toBe("3");
  });

  it("test if -2 + 2 = 0", () => {
    const x = -2;
    const y = 2;

    const result = operate(x, y, "+");

    expect(result).toBe("0");
  });

  it("test if 2 x 2 = 4", () => {
    const x = 2;
    const y = 2;

    const result = operate(x, y, "x");

    expect(result).toBe("4");
  });

  it("test if 4 ÷ 2 = 2", () => {
    const x = 4;
    const y = 2;

    const result = operate(x, y, "÷");

    expect(result).toBe("2");
  });

  it("test if 3 % 2 = 1", () => {
    const x = 3;
    const y = 2;

    const result = operate(x, y, "%");

    expect(result).toBe("1");
  });
});
