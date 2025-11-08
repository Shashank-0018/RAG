/**
 * Cleans the input text by removing extra whitespace and newlines.
 * @param {string} text - The text to clean.
 * @returns {string} - The cleaned text.
 */
function cleanText(text) {
  // Replace multiple newlines and spaces with a single space
  return text.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, ' ').trim();
}

/**
 * Splits the text into chunks of a specified size.
 * @param {string} text - The text to split.
 * @param {number} chunkSize - The maximum size of each chunk.
 * @param {number} overlap - The overlap between chunks.
 * @returns {string[]} - An array of text chunks.
 */
function splitText(text, { chunkSize = 1000, overlap = 200 } = {}) {
  if (chunkSize <= overlap) {
    throw new Error('Chunk size must be greater than overlap.');
  }

  const chunks = [];
  let i = 0;
  while (i < text.length) {
    const end = i + chunkSize;
    chunks.push(text.substring(i, end));
    i += chunkSize - overlap;
  }
  return chunks;
}

module.exports = { cleanText, splitText };
