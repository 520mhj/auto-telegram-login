const axios = require('axios');

const BOT_TOKEN = process.env.BOT_TOKEN; // 在GitHub Secrets中设置
const CHAT_ID = process.env.CHAT_ID; // 在GitHub Secrets中设置

async function sendMessage() {
  const message = 'Hello from GitHub Actions!';
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
    });
    console.log('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

sendMessage();
