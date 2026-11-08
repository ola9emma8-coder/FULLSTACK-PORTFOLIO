import { motion } from "motion/react";
import type { IconType } from "react-icons";
import { FaHtml5, FaReact, FaJs } from "react-icons/fa";
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

type Skill = { name: string; icon: IconType; color: string };

export default function Stack(){
    const skills: Skill[] = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-sky-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Express", icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-amber-400" },
  ];

    return(
        <div className="flex w-full flex-col items-center gap-3 mt-15">
           <motion.h1 initial={{opacity: 0, y: 50}}
           whileInView={{opacity: 1, y: 0}}
           transition={{duration: 0.7, ease: "easeOut"}}
           viewport={{once: true, amount: 0.5}}
           className="text-white text-center font-bold text-2xl">
            Tech Stack & Expertise
           </motion.h1>

           <motion.p initial={{opacity: 0, y: 50}}
           whileInView={{opacity: 1, y: 0}}
           transition={{duration: 0.5, ease: "easeOut"}}
           viewport={{once: true, amount: 0.5}}
           className="text-gray-400 text-center font-bold text-sm">
            Technologies i work with to build amazing products<br/>
            <span className="text-center">providing solutions to real world problems</span>
           </motion.p>
           
           <div className="mx-auto mt-4 grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-3">
            {skills.map((skill, index) => (
                <motion.div initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.5, ease: "easeOut", delay: index * 0.08}}
                viewport={{once: true, amount: 0.5}}
                key={index} 
                className="border border-white/10 hover:border-purple-400 w-30 h-30
                bg-[#0F1422] hover:bg-[#141A2B] rounded-2xl hover:scale-[1.1]
                flex flex-col transition duration-700 ease-in-out
                gap-1 items-center justify-center">
                    <span>{skill.icon && <skill.icon size={32} className={`${skill.color}`} />}</span>
                    <p className="text-gray-400 text-sm">{skill.name}</p>
                    </motion.div>
            ))}
           </div>
        </div>
    )
}