import OpenAI from "openai";
import { Assistant } from "openai/resources/beta/assistants";
import { tools } from "../templates/index";
import { agentPrompt } from "../../lib/prompt";

export async function createAssistant(client: OpenAI): Promise<Assistant> {
  return await client.beta.assistants.create({
    model: "gpt-4-turbo-preview",
    name: "Agent-W",
    instructions: agentPrompt,
    tools: Object.values(tools).map((tool) => tool.definition),
  });
}