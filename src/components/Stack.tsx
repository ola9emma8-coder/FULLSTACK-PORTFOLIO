import { motion } from "motion/react";
export default function Stack(){
    
    return(
        <div>
           <motion.h1 initial={{opacity: 0, y: 0}}
           whileInView={{opacity: 1, y: 50}}
           transition={{duration: 0.5, ease: "easeIn"}}
           viewport={{once: true}}
           className="text-white text-center font-bold text-lg">
            Tech Stack & Expertise
           </motion.h1>

           <motion.p initial={{opacity: 0, y: 0}}
           whileInView={{opacity: 1, y: 50}}
           transition={{duration: 0.5, ease: "easeIn"}}
           viewport={{once: true}}
           className="text-gray-400 text-center font-bold text-sm">
            Tech Stack & Expertise
           </motion.p>
           
        </div>
           

        
    )
}