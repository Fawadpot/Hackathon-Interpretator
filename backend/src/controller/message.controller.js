import Message from '../model/message.js';

// Create a new message
const createMessage = async (req, res) => {
  const { conversationId, text, translatedText, role, sourceLang, targetLang } = req.body;

  try {
    const newMessage = new Message({
      conversationId,
      text,
      translatedText,
      role,
      sourceLang,
      targetLang,
    });

    await newMessage.save();
    res.status(201).json({ message: newMessage });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to create message' });
  }
};

// Fetch messages by conversation ID in descending order of timestamp
const getMessagesByConversationId = async (req, res) => {
  const { conversationId } = req.params;

  try {
    const messages = await Message.find({ conversationId }).sort({ timestamp: -1 });
    res.status(200).json({ messages });
  } catch (error) {
    console.error('Error fetching messages by conversation ID:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

export default {
  createMessage,
  getMessagesByConversationId,
};
