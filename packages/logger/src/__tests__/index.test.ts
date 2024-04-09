import { logger } from "../index";

jest.spyOn(global.console, "log");

describe("@packages/logger", () => {
  it("prints a log message", () => {
    logger("Hello from logger package");
    expect(console.log).toHaveBeenCalled();
  });
});
