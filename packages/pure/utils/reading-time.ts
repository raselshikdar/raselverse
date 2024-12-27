'use strict'

/**
 * Simple function to calculate reading time
 * @param {string} text - The text to calculate reading time for
 * @param {number} wordsPerMinute - Words read per minute, default is 200
 * @returns {Object} Object containing reading time details
 */
export default function getReadingTime(
  text: string,
  wordsPerMinute: number = 200
): { text: string; minutes: number; time: number; words: number } {
  // Calculate the number of words
  const words = text.split(/\s+/).filter(Boolean).length // Split by whitespace and filter out empty strings

  // Calculate the number of minutes
  const minutes = words / wordsPerMinute

  // Calculate the time in milliseconds
  const time = Math.round(minutes * 60 * 1000)

  // Calculate the displayed minutes
  const displayed = Math.ceil(minutes)

  return {
    text: `${displayed} min read`,
    minutes: minutes,
    time: time,
    words: words
  }
}
