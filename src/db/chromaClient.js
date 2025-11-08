const { ChromaClient, PersistentClient } = require('chromadb');

const CHROMA_DB_PATH = './chroma_db'; // Local directory for ChromaDB

/**
 * Initializes and returns a ChromaDB client.
 * @returns {PersistentClient} - The ChromaDB client instance.
 */
function getChromaClient() {
  // Try to use PersistentClient if available, otherwise fallback to ChromaClient (HTTP)
  if (typeof PersistentClient !== 'undefined') {
    return new PersistentClient({ path: CHROMA_DB_PATH });
  } else {
    console.warn('PersistentClient not available. Falling back to ChromaClient (HTTP).');
    // Assuming a local ChromaDB server is running on default port
    return new ChromaClient();
  }
}

/**
 * Gets or creates a ChromaDB collection.
 * @param {string} collectionName - The name of the collection.
 * @returns {Promise<any>} - A promise that resolves with the collection instance.
 */
async function getOrCreateCollection(collectionName) {
  const client = getChromaClient();
  try {
    const collection = await client.getCollection({ name: collectionName });
    return collection;
  } catch (error) {
    if (error.message.includes('does not exist')) {
      console.log(`Collection '${collectionName}' does not exist. Creating it...`);
      const collection = await client.createCollection({ name: collectionName });
      return collection;
    }
    throw error;
  }
}

module.exports = { getChromaClient, getOrCreateCollection };
