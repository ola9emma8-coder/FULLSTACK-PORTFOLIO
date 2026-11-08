import { Star } from "lucide-react";
import olamide from "../assets/images/olamidee.jpeg";

export default function Herosection() {
    const stats = [
        {number: "3+", text: "Years \nExperience"},
        {number: "50+", text: "Projects \nCompleted"},
        {number: "10+", text: "Technologies \nUsed"},
        {number: "98%", text: "Client \nSatisfaction"}
    ];

  return (
    <div className="flex justify-center gap-15 items-center mt-10">
      <div className="flex flex-col gap-8">
        <div className="w-fit px-6 py-1 border border-white bg-white/10 rounded-full flex items-center gap-2">
          <Star className="fill-white w-4 h-4" />
          <p className="text-white text-sm [word-spacing:0.20em]">
            FullStack Developer & Frontend Enthusiasist | Based in Africa
          </p>
        </div>

        <h1 className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text 
        text-transparent text-5xl font-bold">
         FullStack Developer<br/> Portfolio
        </h1>

        <p className="text-gray-400 text-sm font-light max-w-md">
          Building modern, scalable web applications with JavaScript and
          cutting-edge technologies. Transforming ideas into exceptional
          digital experiences.
        </p>

        <button className="w-fit bg-violet-600 hover:bg-violet-500 rounded-lg px-5 py-2 
        text-white cursor-pointer transition duration-300">
          Get in Touch
        </button>

        <div className="flex flex-row gap-5">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1 whitespace-pre-line 
                 font-light">
                    <span className="text-purple-400 text-lg">{stat.number}</span>
                    <p className="text-gray-400 text-sm font-light">{stat.text}</p>
                  </div>
            ))}
        </div>
      </div>

      <img
        src={olamide}
        alt="a man in a suit in front of a laptop"
        className="object-cover w-100 h-120 rounded-lg blink"
      />
    </div>
  );
}