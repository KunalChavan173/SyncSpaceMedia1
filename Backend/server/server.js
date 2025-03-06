import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
//const MONGO_URI = "mongodb+srv://heyitshere173:heyitsme173@cluster0.pxc1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const MONGO_URI = process.env.MONGO_URI;

mongoose.set('debug', true);

mongoose
  .connect(MONGO_URI, { dbName: "portfolio" })
  .then(() => console.log("✅ Connected to MongoDB - Portfolio"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Define Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instagram: { type: String, required: true },
  email: { type: String, required: true },
  countryName: { type: String, required: true }, // Field for country name
  dialCode: { type: String, required: true }, // Field for dial code
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ POST API to save data (No phone number validation)
app.post("/api/contact", async (req, res) => {
  console.log("Received Data:", req.body);

  const { name, instagram, email, countryName, dialCode, phone, message } = req.body;

  console.log("Extracted Values:", { name, instagram, email, countryName, dialCode, phone, message });

  if (!name || !instagram || !email || !countryName || !dialCode || !phone || !message) {
    console.log("Validation Error: Missing required fields");
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }

  try {
    const newContact = new Contact({ name, instagram, email, countryName, dialCode, phone, message });
    await newContact.save();
    console.log("Contact saved successfully");
    res.json({ success: true, message: "Thank you for reaching out!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ GET API to fetch all contacts
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

// ✅ Start Server
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));