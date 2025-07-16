import { GoogleGenAI } from "@google/genai";
import MessageModel from "../models/messages.js";
const ai = new GoogleGenAI({
  apiKey: "AIzaSyBLB-2_MzqLykcE2yZLNQZ55G38LWg4two",
});
const messageController = async (req, res) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: req.body.prompt,
  });
  const userMessage = await MessageModel.create({
    type: "user",
    content: req.body.prompt,
  });
  await MessageModel.create({
    type: "ai",
    content: response.candidates[0].content.parts[0].text,
  });

  return res.send(response);
};
const getMessages = async (req, res) => {
  const messages = await MessageModel.find();
  return res.send(messages);
};

export { messageController, getMessages };
