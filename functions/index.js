/**
 * Converts a unix timestamp into a human readable date.
 * @param {number} timestamp
 * @returns Human readable timestamp string in format "Month Date, Year" e.g. "August 31, 2020"
 */
export const timestampToDate = (timestamp) => {
  let readableDate = new Date(timestamp);

  if (!isNaN(readableDate)) {
    return readableDate.toLocaleDateString(window.navigator.language, {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } else {
    return "n/a";
  }
};
