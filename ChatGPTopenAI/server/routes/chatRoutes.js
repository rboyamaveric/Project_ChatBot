const express = require('express');
const router = express.Router();
const { getAIResponse } = require('../utils/openai');

router.post('/', async (req, res) => {
  try {
    const userMessage = req.body.message;
    const aiResponse = await getAIResponse(userMessage);
    res.json({ message: aiResponse });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;


