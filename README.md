# 🚀 OllaOps

OllaOps is a lightweight control plane for managing and monitoring Ollama instances in multi-node environments.

It provides:
- Runtime configuration exposure
- Infrastructure metadata
- Clean API integration
- Multi-server ready architecture

---

## 🏗 Architecture

React Frontend  
↓  
Backend API (proxy)  
↓  
Ollama Node (Docker)  
├─ Ollama API :11434  
└─ OllaOps Config API :11435  

---

## 🐳 Quick Start

```bash
git clone https://github.com/Back2CodeLabs/OllaOps.git
cd ollaops
docker compose up --build
