import Conversation from '../model/conversation.js';

// Retrieve all conversations
const getAllConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find().sort({ timestamp: -1 }); // Sort by createdAt in descending order
        res.status(200).json({ conversations });
    } catch (error) {
        console.error('Error retrieving conversations:', error);
        res.status(500).json({ error: 'Failed to retrieve conversations' });
    }
};

// Retrieve a conversation by ID
const getConversationById = async (req, res) => {
    const { id } = req.params;

    try {
        const conversation = await Conversation.findById(id);
        if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
        }
        res.status(200).json({ conversation });
    } catch (error) {
        console.error('Error retrieving conversation by ID:', error);
        res.status(500).json({ error: 'Failed to retrieve conversation' });
    }
};

// Create a new conversation (empty document)
const createConversation = async (req, res) => {
    try {
        const newConversation = new Conversation(); // Create an empty document
        await newConversation.save();
        res.status(201).json({ conversation: newConversation });
    } catch (error) {
        console.error('Error creating conversation:', error);
        res.status(500).json({ error: 'Failed to create conversation' });
    }
};

// Delete a conversation by ID
const deleteConversationById = async (req, res) => {
    const { id } = req.params;

    try {
        const conversation = await Conversation.findByIdAndDelete(id);
        if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
        }
        res.status(200).json({ message: 'Conversation deleted successfully' });
    } catch (error) {
        console.error('Error deleting conversation:', error);
        res.status(500).json({ error: 'Failed to delete conversation' });
    }
};

export default {
    getAllConversations,
    getConversationById,
    createConversation,
    deleteConversationById,
  };
