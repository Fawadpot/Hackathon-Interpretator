import mongoose from 'mongoose';
import { ROLES } from '../share/constants.js'; // Ensure this path is correct and uses .js extension

const MessageSchema = new mongoose.Schema({
    conversationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
    text: String,
    translatedText: String,
    role: {
        type: String,
        enum: [ROLES.PATIENT, ROLES.DOCTOR], // Define allowed roles
        required: true // Ensure role is provided
    },
    sourceLang: String,
    targetLang: String,
    timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
