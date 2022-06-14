import path from "node:path"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))

/**
 * @type { import("../src") }
 */
const {default: readableMs} = indexModule

it("should run", () => {
  expect(readableMs(3021)).toBe("3s 21ms")
  expect(readableMs(0)).toBe("0s")
  expect(readableMs()).toBe("0s")
})