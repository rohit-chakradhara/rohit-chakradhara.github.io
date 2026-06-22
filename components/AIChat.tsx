"use client";

import { useMemo, useState } from "react";
import { Bot, Mic, Send, Sparkles } from "lucide-react";
import { getAssistantReply, type ChatMessage } from "@/lib/chat";
import { SectionHeading } from "@/components/SectionHeading";

const starterPrompts = [
  "What kind of professional is Rohit?",
  "How does he handle ambiguity?",
  "Why would he fit a product role?",
  "Tell me about his projects."
];

export function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m Rohit’s local demo assistant. Ask me about his journey, how he works, project stories, leadership style, or future direction."
    }
  ]);
  const [input, setInput] = useState("");

  const canSend = input.trim().length > 0;

  const history = useMemo(() => messages, [messages]);

  function sendMessage(text?: string) {
    const value = (text ?? input).trim();
    if (!value) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: value },
      { role: "assistant", content: getAssistantReply(value) }
    ];

    setMessages(nextMessages);
    setInput("");
  }

  return (
    <section id="ai" className="mt-24 scroll-mt-24">
      <SectionHeading
        kicker="AI conversation"
        title="A local demo assistant that speaks like a person"
        description="This bot is intentionally conversational. It avoids sounding like a rigid tool directory and instead explains the profile in a warm, flexible way."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="glass-card fancy-ring rounded-[1.75rem] p-4 sm:p-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-500 to-orange-400 text-white shadow-soft">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Rohit AI</h3>
              <p className="text-sm text-[var(--muted-fg)]">
                Local demo, no API key needed
              </p>
            </div>
          </div>

          <div className="max-h-[430px] space-y-4 overflow-y-auto px-1 py-4">
            {history.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex items-start gap-3 ${
                  message.role === "user" ? "justify-end" : ""
                }`}
              >
                {message.role === "assistant" ? (
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-violet-500/15 text-violet-600 dark:text-violet-300">
                    <Sparkles className="h-4 w-4" />
                  </span>
                ) : null}

                <div
                  className={`max-w-[80%] rounded-[1.5rem] px-4 py-3 text-sm leading-7 shadow-sm ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-400 text-white"
                      : "glass-card text-[var(--page-fg)]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="pill rounded-full px-3 py-2 text-left text-xs font-medium text-[var(--page-fg)] transition hover:scale-[1.01]"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask something conversational..."
              className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400 dark:bg-slate-950/60"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!canSend}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-400 px-4 py-3 text-sm font-medium text-white shadow-soft transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card fancy-ring rounded-[1.75rem] p-5">
            <div className="section-kicker">What it can answer</div>
            <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--muted-fg)]">
              <p>How Rohit thinks and learns.</p>
              <p>How he works with teams and stakeholders.</p>
              <p>Why he fits product and leadership-heavy roles.</p>
              <p>How his projects create value.</p>
            </div>
          </div>
          <div className="glass-card fancy-ring rounded-[1.75rem] p-5">
            <div className="section-kicker">Tone</div>
            <div className="mt-3 text-sm leading-7 text-[var(--muted-fg)]">
              Friendly, direct, and human. It should sound like a real assistant
              explaining a real person, not a keyword extractor.
            </div>
          </div>
          <div className="glass-card fancy-ring rounded-[1.75rem] p-5">
            <div className="section-kicker">Example question</div>
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/55 p-4 text-sm leading-7 dark:bg-slate-950/40">
              Why would Rohit be useful in a team that needs both product judgment
              and delivery discipline?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
