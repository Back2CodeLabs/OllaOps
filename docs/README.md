# OllaOps Architecture

OllaOps extends Ollama with a minimal control plane layer.

Each node runs:
- Ollama container
- OllaOps Config service

The central backend:
- Aggregates node configs
- Proxies requests
- Enables monitoring & orchestration

Future:
- Metrics export
- Scaling logic
- Node health scoring
- Load balancing
