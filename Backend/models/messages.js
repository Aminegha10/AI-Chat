// models/Message.js
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    // Rôle de l'expéditeur : "user" ou "ai"
    type: {
      type: String,
      enum: ["user", "ai"],
      required: true,
    },

    // Contenu du message (texte)
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Crée automatiquement createdAt et updatedAt
  }
);

export default mongoose.model("Message", MessageSchema);
