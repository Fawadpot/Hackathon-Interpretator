import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
  summary: { type: String, default: "" },
  timestamp: { type: Date, default: Date.now },
});

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
