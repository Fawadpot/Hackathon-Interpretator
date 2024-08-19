import express from "express";
import messageController from "../controller/message.controller.js";

const messageRouter = express.Router();

// Create a new message
messageRouter.post("/messages", messageController.createMessage);

// Fetch messages by conversation ID in descending order of timestamp
messageRouter.get("/messages/:conversationId", messageController.getMessagesByConversationId);

export default messageRouter;
