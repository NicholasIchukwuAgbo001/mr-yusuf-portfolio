"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute rounded-full p-[4px] bg-gradient-to-tr from-secondary via-purple-500 to-pink-500"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        style={{
          width: "18rem",
          height: "18rem",
        }}
      >
        <div className="w-full h-full bg-slate-950 rounded-full" />
      </motion.div>
      <Image
        src="/yusuf-img.png"
        alt="Yusuf Usman image"
        width={400}
        height={500}
        className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl"
        priority
      />
    </div>
  );
};

export default HeroImage;
