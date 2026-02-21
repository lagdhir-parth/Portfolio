// src/components/ChatBotButton.tsx
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { X, MessageCircleMore } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessage {
  role: "user" | "ai";
  text: string;
}

const ChatBotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom
  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await axios.post("http://localhost:8000/chat", {
        message: input,
      });

      const replyText = response.data.reply;

      // Typewriter effect
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < replyText.length) {
          setMessages((prev) => {
            const newMsgs = [...prev];
            if (
              !newMsgs[newMsgs.length - 1]?.role ||
              newMsgs[newMsgs.length - 1].role === "user"
            ) {
              newMsgs.push({ role: "ai", text: replyText.slice(0, i + 1) });
            } else {
              newMsgs[newMsgs.length - 1].text = replyText.slice(0, i + 1);
            }
            return newMsgs;
          });
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 30);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Sorry, something went wrong!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-(--primary-accent) hover:bg-(--accent-hover) rounded-full shadow-2xl hover:shadow-3xl border-4 border-(--color-secondary)/20 backdrop-blur-sm transition-all duration-500 active:scale-95 flex items-center justify-center group cursor-pointer"
      >
        <MessageCircleMore
          className={`${isOpen ? "rotate-45" : ""} transition-transform duration-300`}
        />
        <div className="absolute -top-10 -right-2 bg-(--primary-text)/90 text-(--color-secondary) px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Ask AI
        </div>
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-120 bg-(--color-hover)/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-(--primary-accent)/30 animate-in slide-in-from-bottom-4 fade-in duration-500 flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-(--primary-accent)/20 rounded-t-3xl bg-linear-to-r from-(--primary-accent)/10 to-(--accent-hover)/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-linear-to-r from-(--primary-accent) to-(--accent-hover) rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-(--color-secondary)"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-(--primary-text)">
                      Resume AI Bot
                    </h3>
                    <p className="text-sm text-(--muted-text)">
                      Ask about my experience
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-(--color-hover)/50 rounded-xl transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <X className="text-(--primary-text)" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={chatRef} className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-12 text-(--muted-text)">
                  <div className="w-16 h-16 mx-auto mb-4 bg-(--primary-accent)/20 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-(--primary-accent)"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <p>Ask me anything about Parth's resume!</p>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-(--primary-accent) text-(--color-secondary)"
                          : "bg-(--color-hover)/50 border border-(--primary-accent)/30 text-(--primary-text)"
                      }`}
                    >
                      {msg.role === "ai" ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {String(msg.text)}
                        </ReactMarkdown>
                      ) : (
                        msg.text
                      )}
                    </div>
                  </div>
                ))
              )}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-4 bg-(--color-hover)/50 border border-(--primary-accent)/30 rounded-2xl text-(--primary-text) flex items-center gap-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          animate={{ opacity: [0.3, 1], y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          key={i}
                          className="w-2 h-2 bg-(--muted-text) rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-(--primary-accent)/20 bg-(--color-hover)/50">
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInput(e.target.value)
                  }
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                    e.key === "Enter" && sendMessage()
                  }
                  placeholder="Ask about my projects, experience..."
                  className="flex-1 bg-(--color-hover)/50 border border-(--primary-accent)/30 text-(--primary-text) placeholder-(--muted-text) px-4 py-3 rounded-2xl focus:outline-none focus:border-(--primary-accent) focus:ring-2 focus:ring-(--primary-accent)/30 transition-all duration-300"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="w-12 h-12 bg-(--primary-accent) hover:bg-(--accent-hover) text-(--color-secondary) rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBotButton;
