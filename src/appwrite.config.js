import { Client } from 'appwrite';

const client = new Client();
console.log('API Endpoint:', process.env.REACT_APP_API_ENDPOINT);
console.log('Project ID:', process.env.REACT_APP_PROJECT_ID);
console.log('col ID:', process.env.REACT_APP_NOTIFICATIONS_COLLECTION_ID);
console.log('buc id:', process.env.REACT_APP_IMAGES_BUCKET_ID)


client.setEndpoint(process.env.REACT_APP_API_ENDPOINT).setProject(process.env.REACT_APP_PROJECT_ID);

export default client;

