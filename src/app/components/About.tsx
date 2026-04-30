import { motion } from "motion/react";
import { Download, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Hanan_Biazid_CV.pdf"; // اسم الملف عند التحميل
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FFB5DA]/10 to-[#D4A5FF]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Animated Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] rounded-3xl blur-3xl opacity-20"
              />

              {/* Sparkle Effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${10 + i * 15}%`,
                  }}
                >
                  <Sparkles size={16} className="text-[#FFB5DA]" />
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-4 border-gray-200 dark:border-white/20 shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#FFB5DA]/50 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] bg-clip-text text-transparent">
                MERN & PERN Stack developer & UI/UX Designer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a Software Engineering graduate specializing in Full-stack
                development and UI/UX design. I build complete web
                solutions—from designing intuitive user interfaces to
                implementing robust, scalable backends. My expertise spans the
                PERN/MERN stack, with strong skills in authentication systems,
                RESTful APIs, database design, and modern UI frameworks like
                Material-UI and Tailwind. On the design side, I create
                user-centered experiences through wireframing, prototyping in
                Figma, and applying UX research principles.
              </p>
              {/* <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                My approach combines technical excellence with creative
                problem-solving, ensuring that every project not only functions
                flawlessly but also delivers an exceptional user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm constantly learning and adapting to new technologies,
                staying at the forefront of web development trends to deliver
                modern, innovative solutions.
              </p> */}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] text-white font-medium hover:shadow-xl hover:shadow-[#FFB5DA]/30 transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
