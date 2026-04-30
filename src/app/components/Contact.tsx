import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const body = new FormData(e.currentTarget);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      }

      const data = await res.json().catch(() => null);
      const message =
        data?.errors
          ?.map((err: { message: string }) => err.message)
          .join(", ") || "Something went wrong. Please try again.";
      setStatus("error");
      setErrorMessage(message);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hanan.bayazeed56@gmail.com",
      link: "mailto:hanan.bayazeed56@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+966532456435",
      link: "tel:+966532456435",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Saudi Arabia, Riyadh",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#D4A5FF]/10 to-[#FFB5DA]/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 dark:border-white/10 hover:border-[#FFB5DA]/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${
                    index === 0
                      ? "from-[#FFB5DA] to-[#FFC8E5]"
                      : index === 1
                        ? "from-[#A8D8EA] to-[#C4E5F5]"
                        : "from-[#D4A5FF] to-[#E5C8FF]"
                  } flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#FFB5DA]/30 transition-all duration-300 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FFB5DA] focus:ring-2 focus:ring-[#FFB5DA]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FFB5DA] focus:ring-2 focus:ring-[#FFB5DA]/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FFB5DA] focus:ring-2 focus:ring-[#FFB5DA]/20 transition-all"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FFB5DA] focus:ring-2 focus:ring-[#FFB5DA]/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              whileHover={
                status === "submitting" ? undefined : { scale: 1.05, y: -3 }
              }
              whileTap={status === "submitting" ? undefined : { scale: 0.95 }}
              type="submit"
              disabled={status === "submitting"}
              className="w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB5DA] via-[#A8D8EA] to-[#D4A5FF] text-white font-medium hover:shadow-xl hover:shadow-[#FFB5DA]/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {status === "submitting" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-300"
              >
                <CheckCircle2 size={20} />
                <span className="text-sm font-medium">
                  Message sent! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-300"
              >
                <AlertCircle size={20} />
                <span className="text-sm font-medium">{errorMessage}</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
