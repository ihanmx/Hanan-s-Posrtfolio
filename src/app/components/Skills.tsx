import { motion } from "motion/react";
import { Code2, Database, Palette } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      gradient: "from-[#FFB5DA] to-[#FFC8E5]",
      bgLight: "bg-[#FFB5DA]/20",
      bgDark: "dark:bg-[#FFB5DA]/10",
      textLight: "text-[#C73676]",
      textDark: "dark:text-[#FFB5DA]",
      borderLight: "border-[#FFB5DA]/40",
      borderDark: "dark:border-[#FFB5DA]/30",
      skills: [
        "React",
        "Redux",
        "RTK query",
        "TypeScript",
        "Tailwind CSS",
        "MaterialUI",
        "Atomic design systems",
        "HTML",
        "CSS",
        "JS",
        "Socket.io",
        "Framer Motion",
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      gradient: "from-[#A8D8EA] to-[#C4E5F5]",
      bgLight: "bg-[#A8D8EA]/20",
      bgDark: "dark:bg-[#A8D8EA]/10",
      textLight: "text-[#2B7A9F]",
      textDark: "dark:text-[#A8D8EA]",
      borderLight: "border-[#A8D8EA]/40",
      borderDark: "dark:border-[#A8D8EA]/30",
      skills: [
        "Node.js",
        "MVC",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Docker",
        "Docker Compose",
        "Nginx",
        "PM2",
        "GitHub Actions (CI/CD)",
        "Linux (Ubuntu)",
        "SSH",
        "Sentry",
        "MongoDB Atlas",
        "Netlify",
        "Render",
        "GraphQL",
        "Deno",
        "Python",
        "ORM",
        "ODM",
      ],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      gradient: "from-[#D4A5FF] to-[#E5C8FF]",
      bgLight: "bg-[#D4A5FF]/20",
      bgDark: "dark:bg-[#D4A5FF]/10",
      textLight: "text-[#8B4FCF]",
      textDark: "dark:text-[#D4A5FF]",
      borderLight: "border-[#D4A5FF]/40",
      borderDark: "dark:border-[#D4A5FF]/30",
      skills: [
        "Figma",
        "Design Thinking",
        "Prototyping",
        "User Research",
        "Wireframing",
        "Mobile-First Design",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FFB5DA]/10 to-[#A8D8EA]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and design skills that I use
            to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/30 dark:border-white/10 hover:border-[#FFB5DA]/50 hover:shadow-xl hover:shadow-[#FFB5DA]/10 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`px-4 py-2 rounded-full ${category.bgLight} ${category.bgDark} border ${category.borderLight} ${category.borderDark} ${category.textLight} ${category.textDark} text-sm font-semibold backdrop-blur-sm cursor-default shadow-sm hover:shadow-md transition-all`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
