const fs = require('fs');
const { PDFParse } = require('pdf-parse');

/**
 * Extracts text from a PDF file.
 * @param {string} filePath - The path to the PDF file.
 * @returns {Promise<string>} - A promise that resolves with the extracted text.
 */
async function loadPdf(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    return result.text;
  } catch (error) {
    console.error('Error loading PDF:', error);
    throw error;
  }
}

module.exports = { loadPdf };
