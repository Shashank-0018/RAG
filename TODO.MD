# TODO

[x] Add `Readme`
[x] Add `System.md`
[x] Add `ENV` files

[x] `npm init -y`
[x] created `package.json`

[x] `npm i chromadb langchain pdf-parse dotenv`
[x] updated `readme`
[x] updated `gitignore`
[x] mkdir src\loaders
[x] mkdir src\preprocess
[x] mkdir src\embeddings
[x] mkdir src\db
[x] mkdir src\query
[x] mkdir src\llm
[x] mkdir python
[x] New-Item -Path src\index.js -ItemType File -Force
[x] Initialize Python embedding service `python/embedding_server.py`
[x] created Chroma client file `chromaClient.js`
[x] Implement PDF loader module in src/loaders to extract text from NCERT PDFs using pdf-parse
[ ] Develop text preprocessing in src/preprocess to clean and split text into token chunks
[ ] Set up embedding generation by connecting Node.js with the Python embedding service in src/embeddings
[ ] Implement storage and retrieval functions in src/db using chromaClient.js
[ ] Build query processing in src/query that takes user input, creates query embeddings, performs similarity search
[ ] Integrate Groq LLM in src/llm for final response generation based on retrieved chunks
[ ] Create endpoint or CLI orchestrator in src/index.js for end-to-end flow testing
[ ] Add error handling, logging, and environment variable configurations using dotenv

