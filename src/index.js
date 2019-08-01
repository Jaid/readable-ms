/** @module readable-ms */

import humanizeDuration from "humanize-duration"

/**
 * @function
 * @param {number} milliseconds
 * @returns {string} Formatted duration
 * @example
 * import readableMs from "readable-ms"
 * const result = readableMs(3021)
 * result === "3s 21ms"
 */
export default humanizeDuration.humanizer({
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