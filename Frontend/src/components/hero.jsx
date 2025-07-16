import { Button } from "@/components/ui/button";

export default function HeroSection({ onTryDemo }) {
  return (
    <div className="text-center py-11">
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
        Chat with <span className="text-cyan-400">AI</span>
      </h1>

      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Simply ask your AI chatbot assistant to generate!
      </p>

      <Button
        onClick={onTryDemo}
        className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full text-lg transition-all duration-300"
      >
        Try With Demo
      </Button>
    </div>
  );
}
