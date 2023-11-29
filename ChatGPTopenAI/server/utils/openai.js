const axios = require('axios');
require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

/**
 * Get a response from OpenAI's API based on the user's message.
 * @param {string} userMessage - The message from the user.
 * @returns {Promise<string>} - The AI's response.
 */
const getAIResponse = async (userMessage) => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    // Check if the response contains choices and a message
    if (response.data.choices && response.data.choices.length > 0 && response.data.choices[0].message) {
      const message = response.data.choices[0].message;
      if (message.content) {
        return message.content.trim();
      } else {
        throw new Error('Message content is missing in OpenAI response');
      }
    } else {
      throw new Error('No response or unexpected format from OpenAI');
    }
  } catch (error) {
    console.error('Error in OpenAI response:', error);
    throw error;
  }
};

module.exports = { getAIResponse };
