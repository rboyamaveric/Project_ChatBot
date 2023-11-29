const pdfParse = require('pdf-parse');

/**
 * Extract text from a PDF buffer.
 * @param {Buffer} pdfBuffer - The buffer of the PDF file.
 * @returns {Promise<string>} - The extracted text as a string.
 */
const extractTextFromPDF = async (pdfBuffer) => {
  try {
    const data = await pdfParse(pdfBuffer);
    return data.text;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;
  }
};

module.exports = {
  extractTextFromPDF,
};
