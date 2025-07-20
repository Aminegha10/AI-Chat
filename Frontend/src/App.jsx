import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import ChatInterface from "@/components/chatInterface";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <Navbar />
        <main className="container mx-auto px-4 pt-16">
          {/* <HeroSection /> */}
          <ChatInterface />
        </main>

        {/* <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginOpen(false)
          setIsSignupOpen(true)
        }}
      />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupOpen(false)
          setIsLoginOpen(true)
        }}
      /> */}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
