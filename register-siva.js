import api from './src/services/api.js';
import axios from 'axios';

// We need a direct axios call because api.js might not work in Node environment without some polyfills 
// or simply because it points to localhost:5000/api which is fine, but let's be explicit.

const API_URL = 'http://localhost:5000/api/auth/register';

async function registerSiva() {
    try {
        console.log("Creating user 'siva'...");
        const response = await axios.post(API_URL, {
            username: 'siva',
            email: 'siva@example.com', // Fake email
            password: '2006'
        });
        console.log("✅ User 'siva' created successfully!");
        console.log(response.data);
    } catch (error) {
        if (error.response) {
            console.error("❌ Registration Failed:", error.response.data);
        } else {
            console.error("❌ Network Error:", error.message);
        }
    }
}

registerSiva();
