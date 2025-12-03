import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Sparkles,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import Title from "../components/Title";
import RollingGallery from "../components/RollingGallery";

function Projects() {
  const projects = [
    {
      title: "A Tour Action",
      role: "Lead Programmer",
      category: "Capstone Project",
      description:
        "A cross-platform mobile application built with Flutter (Dart) and Firebase, designed to enhance tourism in Baguio City through technology. The app empowers users to explore, plan, and experience the city's historical and cultural landmarks interactively.",
      features: [
        {
          icon: "📱",
          text: "Personalized itineraries with custom tour route planning",
        },
        {
          icon: "🧭",
          text: "AR navigation displaying landmarks based on real-time location",
        },
        {
          icon: "🌄",
          text: "360° panoramic views for immersive destination previews",
        },
        {
          icon: "☁️",
          text: "Firebase integration for secure cloud-based data management",
        },
      ],
      tech: ["Flutter", "Firebase", "AR", "Google Maps", "Weather API"],
      images: [
        "/imgs/1.jpeg",
        "/imgs/2.jpeg",
        "/imgs/3.jpeg",
        "/imgs/4.jpeg",
        "/imgs/5.jpeg",
        "/imgs/6.jpeg",
        "/imgs/7.jpeg",
        "/imgs/8.jpeg",
      ],
      gradient: "from-purple-500/20 via-pink-500/20 to-red-500/20",
      accentColor: "red",
    },
    {
      title: "Tseksuite",
      role: "Project Lead",
      category: "Fullsuite Project",
      link: "https://fullsuite.tseksuite.com",
      description:
        "TsekSuite is an interactive quiz application developed by FullSuite interns as part of our On-the-Job Training program. The project was designed to modernize internal assessments and provide a simple, efficient, and engaging way to evaluate knowledge across different topics.",
      features: [
        {
          icon: "📝",
          text: "Interactive Quiz System with real-time scoring and feedback",
        },
        { icon: "⚙️", text: "Dynamic Question Management for admins" },
        {
          icon: "⏱️",
          text: "Timed Assessments to simulate real testing environments",
        },
        {
          icon: "📊",
          text: "Performance Tracking to monitor improvement over time",
        },
        { icon: "🔐", text: "Secure Login System for authorized access" },
        {
          icon: "🌐",
          text: "Responsive Interface optimized across all devices",
        },
      ],
      tech: [
        "MySQL",
        "Sequelize",
        "Node.js",
        "Express.js",
        "React.js",
        "Zod",
        "JWT",
      ],
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      accentColor: "blue",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="projects"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center mb-5">
          <Title
            name="Featured Projects"
            sub="Building meaningful solutions with modern technology"
          />
        </div>

        <motion.div
          className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl sm:rounded-4xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700`}
              />

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl sm:rounded-4xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-white/30">
                {/* Header */}
                <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="space-y-2 sm:space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 hover:gap-3 transition-all duration-300"
                        >
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover/link:text-transparent group-hover/link:bg-clip-text group-hover/link:bg-gradient-to-r group-hover/link:from-purple-400 group-hover/link:to-pink-400 transition-all duration-300 break-words">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400 opacity-0 group-hover/link:opacity-100 transition-all duration-300 flex-shrink-0" />
                        </a>
                      ) : (
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white break-words">
                          {project.title}
                        </h3>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium ${
                          project.accentColor === "red"
                            ? "bg-red-500/20 border border-red-500/50 text-red-300"
                            : "bg-blue-500/20 border border-blue-500/50 text-blue-300"
                        } backdrop-blur-sm`}
                      >
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                        {project.role}
                      </span>
                      <span className="text-orange-300/80 text-sm sm:text-base font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  {project.description}
                </p>

                {/* Features Grid */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-purple-400" />
                    <h4 className="text-white font-semibold text-base sm:text-lg">
                      Key Features
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/feature"
                      >
                        <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </span>
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                          {feature.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="mb-6 sm:mb-8">
                  <RollingGallery
                    autoplay={true}
                    pauseOnHover={true}
                    images={project.images}
                  />
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-semibold text-base sm:text-lg">
                      Tech Stack
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-600/40 rounded-full text-xs sm:text-sm font-medium text-gray-200 hover:border-purple-500/50 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-default backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
