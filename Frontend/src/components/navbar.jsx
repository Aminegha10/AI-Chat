
import { User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Aichatter</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white hover:text-cyan-400 transition-colors">
          Home
        </a>
        <a href="#" className="text-white hover:text-cyan-400 transition-colors">
          Features
        </a>
        <a href="#" className="text-white hover:text-cyan-400 transition-colors">
          Pricing
        </a>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onLoginClick}
          className="text-white hover:text-cyan-400 hover:bg-white/10"
        >
          Login
        </Button>
        <Button size="sm" onClick={onSignupClick} className="bg-cyan-500 hover:bg-cyan-600 text-white">
          Sign Up
        </Button>

        {/* Profile and Menu Icons */}
        <div className="flex items-center space-x-2 ml-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
