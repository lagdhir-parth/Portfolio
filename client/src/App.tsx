// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Your Tailwind v4 + theme
import ChatBotButton from "./components/ChatBotBtn";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Projects = lazy(() => import("./pages/Projects"));
  const About = lazy(() => import("./pages/About"));
  const Contact = lazy(() => import("./pages/Contact"));

  return (
    <div className="min-h-screen bg-linear-to-br from-(--color-secondary) to-(--color-primary)">
      <Navbar />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[50vh] text-(--muted-text)">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <ChatBotButton />
    </div>
  );
}

export default App;
