import path from "node:path"

import {fileURLToPath, pathToFileURL} from "node:url"

const dirName = path.dirname(fileURLToPath(import.meta.url))
const indexPath = process.env.MAIN ?? path.join(dirName, "..", "src", "index.js")

/**
 * @type { import("../src") }
 */
const {default: readableMs} = await import(pathToFileURL(indexPath))

it("should run", () => {
  expect(readableMs(3021)).toBe("3s 21ms")
  expect(readableMs(0)).toBe("0s")
  expect(readableMs()).toBe("0s")
})