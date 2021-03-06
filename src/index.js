/** @module readable-ms */

import humanizeDuration from "humanize-duration"

const humanizer = humanizeDuration.humanizer({
  units: ["h", "m", "s", "ms"],
  spacer: "",
  delimiter: " ",
  language: "short",
  languages: {
    short: {
      h: () => "h",
      m: () => "m",
      s: () => "s",
      ms: () => "ms",
    },
  },
})

/**
 * @function
 * @param {number} milliseconds
 * @returns {string} Formatted duration
 * @example
 * import readableMs from "readable-ms"
 * const result = readableMs(3021)
 * result === "3s 21ms"
 * const result2 = readableMs(0)
 * result2 === "0s"
 */
export default milliseconds => {
  if (milliseconds !== 0 && Number.isFinite(milliseconds)) {
    return humanizer(milliseconds)
  }
  return "0s"
}