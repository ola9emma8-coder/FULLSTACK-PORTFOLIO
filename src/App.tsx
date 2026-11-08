import './index.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import About from './components/About';
import Stack from './components/Stack';
export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] text-white">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="absolute top-40 -right-32 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[130px]" />

        <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[140px]" />
      </div>

      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

     <Navbar />

     <Herosection />

     <About />

     <Stack />
      
    </main>
  );
}