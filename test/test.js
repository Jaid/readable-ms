import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: readableMs} = indexModule

it("should run", () => {
  const result = readableMs(3021)
  expect(result).toBe("3s 21ms")
})