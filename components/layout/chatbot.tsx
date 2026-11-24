"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

type Message = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

const QUICK_PROMPTS = ["What services do you offer?", "How can I work with Maction?", "Where do you operate?"];

const INITIAL_MESSAGE: Message = {
  id: 1,
  role: "assistant",
  content:
    "Hi! I’m Maction’s virtual assistant. I can help you explore our services, industries, and next steps.",
};

function getReply(message: string) {
  const normalized = message.toLowerCase();

  if (normalized.includes("service") || normalized.includes("offer") || normalized.includes("help")) {
    return "We provide market research, data analytics, business consulting, and marketing consulting. Visit our services page or tell me what challenge you’re working on.";
  }

  if (
    normalized.includes("work with") ||
    normalized.includes("contact") ||
    normalized.includes("project") ||
    normalized.includes("quote")
  ) {
    return "We’d be happy to discuss your goals, timeline, and requirements. You can share the details through our contact form and our team will typically respond within 2 business days.";
  }

  if (
    normalized.includes("where") ||
    normalized.includes("location") ||
    normalized.includes("operate") ||
    normalized.includes("global")
  ) {
    return "Maction supports clients globally, with teams and expertise across multiple markets. Visit our About page for more about our presence.";
  }

  if (normalized.includes("industry") || normalized.includes("industries")) {
    return "Our experience spans industries including FMCG, healthcare, technology, financial services, and more. We tailor each engagement to the market and business question.";
  }

  return "I can help with questions about our services, industries, global presence, or starting a project. Try one of the quick questions below, or contact our team for a detailed conversation.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isTyping) return;

    setInput("");
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: "user", content: trimmed },
    ]);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: Date.now() + 1, role: "assistant", content: getReply(trimmed) },
      ]);
      setIsTyping(false);
    }, 450);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed right-4 bottom-4 z-[60] sm:right-6 sm:bottom-6">
      {isOpen && (
        <section
          aria-label="Maction virtual assistant"
          className="mb-3 flex h-[min(580px,calc(100vh-7rem))] w-[min(370px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <header className="flex items-center justify-between bg-brand px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-bold">Maction Assistant</h2>
                <p className="text-xs text-blue-100">Here to help you get started</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-brand text-white"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}
            {isTyping && (
              <p className="w-fit rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                Typing...
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-slate-100 bg-white p-3">
            {messages.length === 1 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-left text-xs font-medium text-brand transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <label htmlFor="chatbot-message" className="sr-only">
                Message
              </label>
              <input
                id="chatbot-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question..."
                className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-700 outline-none transition-shadow placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-blue-100"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            <Link
              href="/contact-us"
              className="mt-2 block text-center text-xs font-medium text-brand underline-offset-2 hover:underline"
            >
              Talk to our team
            </Link>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close Maction Assistant" : "Open Maction Assistant"}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-blue-900/20 transition-transform hover:scale-105 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
