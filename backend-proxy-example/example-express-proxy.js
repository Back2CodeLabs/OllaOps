import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/api/ollama/config', async (req, res) => {
  const { server } = req.query;

  try {
    const configUrl = server.replace(':11434', ':11435') + '/config';
    const response = await fetch(configUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch config' });
  }
});

app.listen(8000, () => {
  console.log('Backend proxy running on port 8000');
});