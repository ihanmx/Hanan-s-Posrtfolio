import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FloatingShapes } from "./FloatingShapes";
import { WaveAnimation } from "./WaveAnimation";
import { Sparkles } from "lucide-react";
import heroImage from "../assets/images/myImage.png";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 overflow-hidden"
    >
      <FloatingShapes />
      <WaveAnimation />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFB5DA]/10 to-[#A8D8EA]/10 border border-[#FFB5DA]/30 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-[#FFB5DA]" />
              <span className="text-[#FFB5DA] dark:text-[#FFC8E5] text-sm font-medium">
                Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Hanan
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Software Engineer with a strong focus on full-stack web
              development and UI/UX design. Skilled in creating scalable,
              user-centered applications that combine functionality with clean,
              modern design. Eager to contribute technical expertise and
              creative problem-solving in a dynamic, team-driven environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("#portfolio")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] text-white font-medium hover:shadow-xl hover:shadow-[#FFB5DA]/30 transition-all duration-300"
              >
                View Portfolio
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("#contact")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-[#FFB5DA]/30 text-gray-700 dark:text-white font-medium hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Circular Image with Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative order-1 md:order-2"
          >
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-[#FFB5DA]/20 blur-sm"
              ></motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-[#A8D8EA]/20 blur-sm"
              ></motion.div>

              {/* Glowing Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB5DA]/30 via-[#A8D8EA]/30 to-[#D4A5FF]/30 blur-3xl"
              ></motion.div>

              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-200 dark:border-white/20 shadow-2xl backdrop-blur-sm"
              >
                <ImageWithFallback
                  src={heroImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#FFB5DA] to-[#A8D8EA]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
