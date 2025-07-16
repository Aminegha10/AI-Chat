import { useState } from "react";
import { Send, X, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import { useAddPromptMutation, useGetPromptQuery } from "../app/prompt";
import { Riple } from "react-loading-indicators";

export default function ChatInterface() {
  const [prompt, setPrompt] = useState("");
  const { data = [], isLoading } = useGetPromptQuery();
  const [addPrompt] = useAddPromptMutation();
  //   For scrolling
  console.log(data);
  const scrollRef = useRef(null);

  const handleSendMessage = async () => {
    if (!prompt.trim()) return;

    try {
      const response = await addPrompt({
        prompt,
        sessionId: "md4p2vpz-5bou1p",
      }).unwrap();
      toast.success("Message sent!", {
        className: "text-sm font-medium",
      });
      setPrompt("");
    } catch (error) {
      toast.error("Failed to send message.", {
        className: "text-sm font-medium",
      });
    }
  };
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [data]);

  const LoadingMessage = () => (
    <div className="space-y-2">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="inline-block bg-slate-800/50 p-3 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-sm text-gray-400">AI is thinking...</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 px-11">Just now</div>
    </div>
  );
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center py-36">
          <Riple color="#26C6DA" size="medium" text="" textColor="" />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-400 font-medium">Logo</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div
              className="p-6 space-y-6 max-h-96 overflow-y-auto"
              ref={scrollRef}
            >
              {/* Loading Message */}
              {data[0].messages.map((msg, index) => {
                const isUser = msg.type === "human";
                const content = msg.data?.content || "";

                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${
                      isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isUser ? "bg-blue-500" : "bg-cyan-500"
                      }`}
                    >
                      {isUser ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>

                    {/* Message content */}
                    <div className={`flex-1 ${isUser ? "text-right" : ""}`}>
                      <div
                        className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                          isUser
                            ? "bg-blue-600 text-white ml-auto"
                            : "bg-slate-800/50 text-white"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <Input
                  value={prompt}
                  required
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter Your Message..."
                  className="flex-1 bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
