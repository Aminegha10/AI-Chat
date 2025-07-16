import express from "express";
import { messageController, getMessages } from "./controllers/messages.js";
import ConnectDB from "./config/dbconfig.js"; // Import the function to connect to MongoDB
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json());

//cors
app.use(cors());

// Connect to MongoDB
ConnectDB(); // Import and call the function to connect to MongoDB

// Basic test route

// The client gets the API key from the environment variable `GEMINI_API_KEY`.

// Example of using the GoogleGenAI client to generate a response
app.post("/generate", messageController);
app.get("/", getMessages);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
