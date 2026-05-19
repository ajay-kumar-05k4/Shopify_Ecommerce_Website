import axios from "axios";

const ML_BASE = process.env.ML_SERVICE_URL || "http://localhost:8000";

export const sendChatMessage = async (message, userId = null, userName = null, userEmail = null) => {
  try {
    const payload = { message };
    if (userId)     payload.userId    = userId;
    if (userName)   payload.userName  = userName;
    if (userEmail)  payload.userEmail = userEmail;
    const response = await axios.post(`${ML_BASE}/chat`, payload, {
      timeout: 10000,
    });
    return response.data;
  } catch (error) {
    console.error("Chatbot service error:", error.message);
    return {
      response: "I'm sorry, I'm having trouble connecting to our support system right now. Please try again later or contact admin@gmail.com for urgent matters.",
      intent: "error",
      confidence: 0.0
    };
  }
};