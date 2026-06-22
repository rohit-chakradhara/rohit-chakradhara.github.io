export type ChatRole = "assistant" | "user";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

export function getAssistantReply(input: string): string {
  const q = normalize(input);

  if (!q) {
    return "Ask me anything about Rohit’s journey, the way he works, his leadership style, or the kind of projects he has handled.";
  }

  if (includesAny(q, ["who are you", "what are you", "tell me about him", "about rohit"])) {
    return "Rohit is the kind of professional who learns fast, adapts easily, and works comfortably across data, product, cloud, and delivery. He is not locked into one identity; he tends to fit the problem and the team in front of him.";
  }

  if (includesAny(q, ["why should i hire", "why hire", "fit for product", "product owner", "leader"])) {
    return "He brings a mix of structure, communication, and ownership. That makes him useful in product-heavy environments where the work is not only technical, but also about prioritization, alignment, and turning ambiguity into a clear path forward.";
  }

  if (includesAny(q, ["how does he think", "approach ambiguity", "adaptable", "learning"])) {
    return "His default style is to understand the context first, then simplify the problem, then move toward a practical solution. He adapts quickly because he does not try to force every situation into one fixed playbook.";
  }

  if (includesAny(q, ["projects", "work", "impact", "experience"])) {
    return "His work can be best understood as impact stories rather than a stack of tools. He has contributed to environments where clarity, coordination, and dependable execution mattered, and where the goal was to make decisions easier for the people using the output.";
  }

  if (includesAny(q, ["team", "stakeholder", "communication", "collaboration"])) {
    return "He works well when different teams need to stay aligned. He tends to communicate in a practical way, keep things moving, and bridge technical and business conversations without making them heavier than they need to be.";
  }

  if (includesAny(q, ["future", "next", "what now", "goals", "vision"])) {
    return "The future direction is broader ownership: more product thinking, stronger leadership, and work that blends decision-making, systems thinking, and modern AI-assisted execution.";
  }

  if (includesAny(q, ["tool", "tech", "skills", "skillset", "stack"])) {
    return "The site intentionally avoids turning him into a tool checklist. The main idea is that he can adapt to what the work needs, learn what is necessary, and contribute across contexts.";
  }

  return "That is a good question. Rohit’s strongest quality is adaptability: he can learn quickly, work across moving parts, and stay focused on outcomes. If you want, ask me about his thinking style, project approach, leadership, or career story, and I’ll answer naturally.";
}
