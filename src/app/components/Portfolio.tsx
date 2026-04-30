import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import apisImage from "@/app/assets/images/apis.jpg";
import dhallatyImage from "@/app/assets/images/dhallaty.png";
import tachNoteImage from "@/app/assets/images/techNotes.png";
import shopImage from "@/app/assets/images/shop.png";
export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Dhallaty platform",
      description:
        "Built a production-ready full-stack platform connecting lost and found items.",
      image: dhallatyImage,
      tags: [
        "PERN",
        "React",
        "Node.js",
        "REST APIs",
        "PostgreSQL",
        "Paytabs",
        "JWT",
        "admin dashboards",
        "Mailing service",
        "MUI",
      ],
      url: "https://github.com/ihanmx/Dallaty-Website",
      gradient: "from-[#FFB5DA] to-[#FFC8E5]",
    },
    {
      title: "TechNotes",
      description: "MERN Stack Notes & Ticket Management System",
      image: tachNoteImage,
      tags: [
        "TypeScript",
        "React",
        "Redux",
        "RTK query",
        "Mongoose",
        "JWT",
        "Role-based access",
        "tailwind",
      ],
      url: "https://github.com/ihanmx/MERN-techNotes-website",
      gradient: "from-[#A8D8EA] to-[#C4E5F5]",
    },
    {
      title: "E-store",
      description:
        "A full-featured e-commerce web application built with Node.js and Express.",
      image: shopImage,
      tags: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Session cookies",
        "Mongoose",
        "Nodemailer",
        "MVC",
        "SSR",
        "pagination",
        "Stripe",
      ],
      url: "https://github.com/ihanmx/E-store",
      gradient: "from-[#D4A5FF] to-[#E5C8FF]",
    },
    {
      title: "Posts App — REST API & GraphQL Server",
      description:
        "AI-powered content creation tool using machine learning for text and image generation.",
      image: apisImage,
      tags: [
        "Nodejs",
        "Expressjs",
        "JWT",
        "Multer",
        "GraphQl APIs",
        "RSRT APIs",
      ],
      url: "https://github.com/ihanmx/RESTful-GraphQl-PostsAppServer",
      gradient: "from-[#FFD4B5] to-[#FFE5D4]",
    },
    // {
    //   title: "E-Store Platform",
    //   description:
    //     "Mobile-first fitness application with workout plans, nutrition tracking, and progress visualization.",
    //   image:
    //     "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    //   tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    //   url: "#",
    //   gradient: "from-[#FFB5DA] to-[#D4A5FF]",
    // },
    // {
    //   title: "Real Estate Platform",
    //   description:
    //     "Property listing and management system with virtual tours, mortgage calculator, and booking system.",
    //   image:
    //     "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    //   tags: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    //   url: "#",
    //   gradient: "from-[#A8D8EA] to-[#FFB5DA]",
    // },
  ];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Background Animated Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#A8D8EA]/10 to-[#D4A5FF]/10 rounded-full blur-3xl"
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
            Featured{" "}
            <span className="bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work, from web applications to design
            systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-[#FFB5DA]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFB5DA]/20 cursor-pointer"
            >
              <div className="relative overflow-hidden h-56">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-gray-900/90 via-white/50 dark:via-gray-900/50 to-transparent opacity-60"></div>

                {/* Hover Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-lg`}
                >
                  <ExternalLink size={20} className="text-white" />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.gradient} backdrop-blur-sm font-semibold text-white shadow-sm`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated Border Gradient on Hover */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                style={{
                  background: `linear-gradient(45deg, transparent, ${
                    index % 3 === 0
                      ? "#FFB5DA"
                      : index % 3 === 1
                        ? "#A8D8EA"
                        : "#D4A5FF"
                  }40, transparent)`,
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
