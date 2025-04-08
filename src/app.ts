// Load environment variables
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY environment variable");
}

// Import LangChain modules
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

// Step 1: Initialize the ChatOpenAI model
const model = new ChatOpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, model: "gpt-4" });

// Step 2: Define the messages
const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi!"),
];

// Step 3: Invoke the model and log the response
const response = await model.invoke(messages);
console.log(response);