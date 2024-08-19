import express from "express";
import conversationController from "../controller/conversation.controller.js";

const conversationRouter = express.Router();

// Retrieve all conversations
conversationRouter.get("/conversations", conversationController.getAllConversations);

// Retrieve a conversation by ID
conversationRouter.get("/conversation/:id", conversationController.getConversationById);

// Create a new empty conversation
conversationRouter.post("/conversation", conversationController.createConversation);

// Delete a conversation by ID
conversationRouter.delete("/conversation/:id", conversationController.deleteConversationById);

// Summarize the conversation
conversationRouter.post("/conversation/generate-summary/:id", conversationController.summarizeConversation);

export default conversationRouter;
