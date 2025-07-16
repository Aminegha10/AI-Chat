import mongoose from "mongoose";

const ConnectionDB = () => {
  mongoose
    .connect(
      "mongodb+srv://aminogha:azerAZER@cluster0.ofswz33.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("MongoDB error:", err));
};
export default ConnectionDB;
