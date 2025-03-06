import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://heyitshere173:heyitsme173@cluster0.pxc1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('portfolio');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectToDatabase; 