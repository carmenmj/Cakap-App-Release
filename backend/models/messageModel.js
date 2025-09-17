const mongoose = require("mongoose");

// Define the schema for a message
const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);


// Create the Message model from the schema
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
