import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    // {
    //   title: "Senior Frontend Developer",
    //   company: "Tech Innovations Inc.",
    //   period: "2023 - Present",
    //   description:
    //     "Leading the frontend team in building scalable web applications using React and TypeScript. Implemented design system and improved performance by 40%.",
    //   skills: ["React", "TypeScript", "Next.js", "Team Leadership"],
    // },
    {
      title: "Full-stack Developer Internship",
      company: "Dhallaty",
      period: "Sep 2025 - present",
      description:
        "Full-stack developer of Dhallaty platform for lost & found tech services using PERN stack",
      skills: [
        "React",
        "Express",
        "PostgreSQL",
        "Full-satck dev",
        "Notion",
        "Tech-lead",
        "admin dashboards",
      ],
    },
    {
      title: "Front-end Developer Internship",
      company: "Afaaqware",
      period: "Mar 2026 - present",
      description:
        "Front-end developer internship usign Next,Tailwind,TypeScript, postman and advanced concepts as git flow- atomic design and tech team organization",
      skills: [
        "Git flow",
        "REST APIs",
        "Atomic Design",
        "Postman",
        "Nextjs",
        "Tailwind",
        "Professional Architecture",
      ],
    },

    {
      title: "Technical Support & UI/UX internship",
      company: "Eradah Complex",
      period: "Jan2025 - Mar2025",
      description: "UI/UX, Data Analysis, Technical Support",
      skills: [
        "IT",
        "UI/UX",
        "Security",
        "Data Analisys",
        "PowerBI",
        "QlikSense",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#A8D8EA]/10 to-[#FFB5DA]/10 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise
            and delivering value
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.5 }}
                className={`absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r ${
                  index % 3 === 0
                    ? "from-[#FFB5DA] to-[#FFC8E5]"
                    : index % 3 === 1
                      ? "from-[#A8D8EA] to-[#C4E5F5]"
                      : "from-[#D4A5FF] to-[#E5C8FF]"
                } rounded-full transform -translate-x-1/2 border-4 border-white dark:border-[#0f1729] shadow-lg`}
              ></motion.div>

              <div
                className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 dark:border-white/10 hover:border-[#FFB5DA]/50 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}
                  >
                    <div className="flex items-center gap-2 text-[#FFB5DA] mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${
                            index % 3 === 0
                              ? "from-[#FFB5DA] to-[#FFC8E5]"
                              : index % 3 === 1
                                ? "from-[#A8D8EA] to-[#C4E5F5]"
                                : "from-[#D4A5FF] to-[#E5C8FF]"
                          } text-white backdrop-blur-sm font-semibold shadow-sm`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
