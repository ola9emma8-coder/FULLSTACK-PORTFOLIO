import { motion } from "motion/react";
import { Sparkles, Download, Code, type LucideIcon } from "lucide-react";

type Stat = { number: string; text: string };
type Feature = { icon: LucideIcon; heading: string; text: string };
type Highlight = { title: string; text: string };

export default function About() {
  const stats: Stat[] = [
    { number: "45+", text: "Happy Clients" },
    { number: "2.5k+", text: "Code Commits" },
    { number: "500+", text: "Github Stars" },
  ];

  const expertise: Feature = {
    icon: Code,
    heading: "Expertise",
    text: "Specialized in building web applications with modern technologies and best practices",
  };

  const squareCards: Feature[] = [
    {
      icon: Sparkles,
      heading: "Clean Code",
      text: "Writing maintainable, well-documented code that scales",
    },
    {
      icon: Download,
      heading: "Performance",
      text: "Optimizing for speed and efficiency in every project",
    },
  ];

  const highlights: Highlight[] = [
    { title: "100%", text: "Client Satisfaction" },
    { title: "24/7", text: "Support Available" },
    { title: "Fast", text: "Delivery Time" },
  ];

  const cardStyle =
    "border border-white/10 hover:border-purple-400/40 bg-[#0F1422] hover:bg-[#141A2B] rounded-2xl transition duration-300";

  return (
    <div className="flex justify-center items-center gap-10 mt-25">
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-white text-3xl font-bold">
          Crafting Digital <br />
          Experiences That Matter
        </h1>

        <p className="text-gray-400 text-sm font-light max-w-lg">
          I'm a passionate fullstack developer with over 3 years of experience
          building scalable, performant web applications. I specialize in
          creating intuitive user interfaces that combine beautiful design with
          exceptional functionality.
          <br />
          <br />
          My expertise spans the entire frontend ecosystem, from React and
          Next.js to TypeScript and modern CSS frameworks. I'm committed to
          writing clean, maintainable code and staying current with the latest
          web technologies.
          <br />
          <br />
          When I'm not coding, you'll find me contributing to open-source
          projects, writing technical articles, or exploring new design trends.
        </p>

        <div className="flex flex-row gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1 h-10 rounded-full bg-linear-to-b from-purple-400 via-pink-400 to-blue-400" />
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold">{stat.number}</span>
                <p className="text-gray-400 text-sm">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      
      <div className="flex flex-col gap-4 w-full max-w-md">
       
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className={`${cardStyle} flex flex-row items-start gap-4 px-6 py-4`}
        >
          <div className="rounded-lg bg-purple-500/10 p-2">
            <expertise.icon className="h-5 w-5 text-purple-400" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-md font-bold">{expertise.heading}</h2>
            <p className="text-gray-400 text-sm">{expertise.text}</p>
          </div>
        </motion.div>

       
        <div className="grid grid-cols-2 gap-4">
          {squareCards.map((card, index) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.15 * (index + 1) }}
              viewport={{ once: true }}
              className={`${cardStyle} flex aspect-square flex-col justify-center gap-3 p-5`}
            >
              <div className="w-fit rounded-lg bg-purple-500/10 p-2">
                <card.icon className="h-5 w-5 text-purple-400" />
              </div>
              <h2 className="text-white text-md font-bold">{card.heading}</h2>
              <p className="text-gray-400 text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.45 }}
          viewport={{ once: true }}
          className={`${cardStyle} flex flex-row items-center justify-between gap-4 px-6 py-4`}
        >
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <span className="text-purple-400 font-bold text-lg">{item.title}</span>
              <p className="text-gray-400 text-xs">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}