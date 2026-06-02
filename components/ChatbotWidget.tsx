"use client";

import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { getChatbotAnswer, initialChatbotMessage } from "@/lib/chatbotKnowledge";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: initialChatbotMessage }
  ]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", content: trimmed },
      { role: "assistant", content: getChatbotAnswer(trimmed) }
    ]);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-30">
      {open && (
        <section className="mb-4 flex h-[min(520px,calc(100svh-120px))] w-[calc(100vw-40px)] max-w-sm flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <div className="flex items-center justify-between bg-graphite px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Bot size={18} />
              <h2 className="text-sm font-bold">Holanda Assistant</h2>
            </div>
            <button className="focus-ring rounded-md p-1" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-fog p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-lg px-3 py-2 text-sm leading-6 ${
                  message.role === "assistant"
                    ? "mr-8 bg-white text-slate-700"
                    : "ml-8 bg-safety text-graphite"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-slate-200 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="focus-ring min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
              placeholder="Ask a question"
              aria-label="Ask the Holanda Investments assistant"
            />
            <button className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md bg-safety text-graphite" aria-label="Send message">
              <Send size={18} />
            </button>
          </form>
        </section>
      )}

      <button
        className="focus-ring inline-flex h-14 w-14 items-center justify-center rounded-full bg-graphite text-white shadow-soft transition hover:bg-steel"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open Holanda Investments assistant"
      >
        <MessageCircle size={26} />
      </button>
    </div>
  );
}
