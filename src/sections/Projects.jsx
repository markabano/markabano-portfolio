import RollingGallery from "../components/RollingGallery";
import { motion } from "framer-motion";
import Title from "../components/Title";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="flex flex-col items-center gap-3 mb-8 px-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Title
        name={"Featured Projects"}
        sub={"Building meaningful solutions with modern technology"}
      />

      <div className="w-full max-w-7xl p-4 sm:p-6 md:p-8 rounded-4xl bg-white/15 backdrop-blur-md border border-white/15 shadow-lg">
        <div className="grid grid-cols-1">
          {/* Project Header */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <h4 className="text-xl sm:text-2xl font-semibold text-white">
                A Tour Action
              </h4>
              <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-xs sm:text-sm text-red-300">
                Lead Programmer
              </span>
            </div>
            <h2 className="text-orange-300 text-sm sm:text-base md:text-lg">
              Capstone Project
            </h2>
          </motion.div>

          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4 px-1 sm:px-3">
              A cross-platform mobile application built with{" "}
              <span className="text-white font-medium">Flutter (Dart)</span> and{" "}
              <span className="text-white font-medium">Firebase</span>, designed
              to enhance tourism in Baguio City through technology. The app
              empowers users to explore, plan, and experience the city’s
              historical and cultural landmarks interactively.
            </p>

            {/* Key Features */}
            <div className="mt-4">
              <h3 className="text-white font-semibold mb-2">Key Features:</h3>
              <ul className="text-gray-300 text-sm sm:text-base leading-relaxed list-disc list-inside space-y-1">
                <li>
                  📱 Personalized itineraries with custom tour route planning
                </li>
                <li>
                  🧭 AR navigation displaying landmarks based on real-time
                  location
                </li>
                <li>
                  🌄 360° panoramic views for immersive destination previews
                </li>
                <li>
                  ☁️ Firebase integration for secure cloud-based data management
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Gallery */}
          <div className="mt-6">
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Flutter", "Firebase", "AR", "Google Maps", "Weather API"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-500/40 border border-gray-500/40 rounded-full text-xs sm:text-sm text-gray-200"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
