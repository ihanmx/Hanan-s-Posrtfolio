import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ihanmx", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hanan-biazid-4a4487252/",
      label: "LinkedIn",
    },
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: "mailto:hanan.bayazeed56@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-white/10 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              const gradients = [
                "from-[#FFB5DA] to-[#FFC8E5]",
                "from-[#A8D8EA] to-[#C4E5F5]",
                "from-[#D4A5FF] to-[#E5C8FF]",
                "from-[#FFD4B5] to-[#FFE5D4]",
              ];
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                  aria-label={social.label}
                >
                  <Icon size={20} className="text-white" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} All rights reserved</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with{" "}
                <Heart
                  size={14}
                  className="text-[#FFB5DA] fill-[#FFB5DA] animate-pulse"
                />{" "}
                by Hanan
              </span>
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Designed & Developed with passion and creativity
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
