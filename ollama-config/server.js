const express = require('express');
const os = require('os');

const app = express();

app.get('/config', (req, res) => {
  res.json({
    OLLAMA_NUM_PARALLEL: process.env.OLLAMA_NUM_PARALLEL || 4,
    OLLAMA_NUM_THREADS: process.env.OLLAMA_NUM_THREADS || 'auto',
    cpuCount: os.cpus().length,
    totalMemoryGB: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
    hostname: os.hostname(),
    uptimeSeconds: os.uptime()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('OllaOps config service running on port 3000');
});