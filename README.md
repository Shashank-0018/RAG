# Bheeshma

## The RAG System

A lightweight Retrieval-Augmented Generation (RAG) pipeline built in Node.js, integrating local BERT embeddings, ChromaDB as the vector store, and Groq LLM for fast, context-aware responses.
Designed for free, local, and small-scale document intelligence — perfect for projects like NCERT-based Q&A or PDF knowledge assistants.

## TECH

| Component              | Tool / Library                                     |
| ---------------------- | -------------------------------------------------- |
| **Language**           | Node.js                                            |
| **Embeddings**         | BERT (`all-MiniLM-L6-v2` via SentenceTransformers) |
| **Vector Database**    | ChromaDB (Local)                                   |
| **LLM**                | Groq SDK                                           |
| **PDF Parsing**        | pdf-parse                                          |
| **Integration Bridge** | Python ↔ Node.js (for BERT)                        |

## Features

- 📂 Local document ingestion (PDFs, text files)
- 🧠 Contextual semantic search using BERT embeddings
- 💾 Vector-based similarity retrieval with ChromaDB
- ⚡ LLM-powered answers via Groq SDK
- 🔒 100% local + free (no API costs for embeddings)
- 🧩 Modular code architecture for scaling

## Author

Shashank Asthana (Asthanaji)
💻 [GitHub](https://github.com/Shashank-0018/RAG) | 🔗 [LinkedIn](https://www.linkedin.com/in/shashank-asthanaji/)
