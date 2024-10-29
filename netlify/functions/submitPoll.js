// netlify/functions/submitPoll.js
const { MongoClient } = require('mongodb'); // or use firebase-admin for Firebase
const MONGODB_URI = process.env.MONGODB_URI; // store your MongoDB URI in Netlify environment variables

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body); // parse the form data sent from the client
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        const database = client.db("PollDatabase");
        const collection = database.collection("PollResponses");

        // Insert data
        await collection.insertOne(data);
        await client.close();

        return { statusCode: 200, body: JSON.stringify({ message: 'Poll submitted successfully' }) };
    } catch (error) {
        console.error("Error submitting poll:", error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
