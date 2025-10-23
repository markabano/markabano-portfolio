import './App.css'
import Balatro from './components/Balatro';
import LogoLoop from './components/LogoLoop';
import RollingGallery from './components/RollingGallery';
import Title from './components/Title';
import { SiReact, SiNodedotjs, SiTailwindcss, SiFlutter, SiExpress, SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';
import { motion } from "framer-motion"
import Navbar from './components/Navbar';

export const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com"},
  { node: <SiFlutter />, title: "Flutter", href: "https://www.flutter.dev" },
  { node: <SiGithub />, title: "Github", href: "https://github.com"},
];

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />

      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Balatro
          isRotate={false}
          mouseInteraction={true}
          pixelFilter={700}
        />
      </div>

      <motion.section
        id='home'
        className='flex justify-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center max-w-7xl mt-20 mx-2 sm:mx-4 p-5 sm:p-8 rounded-4xl bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          {/* Text Section */}
          <motion.div
            className='order-2 md:order-1 text-center md:text-left'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-white font-bold break-words'>
              MARK JOSEPH E.{" "}
              <span className='bg-gradient-to-tl from-red-500 to-orange-300 bg-clip-text text-transparent'>
                ABAÑO
              </span>
            </h1>
            <p className='text-sm md:text-md lg:text-lg text-gray-300 leading-relaxed mt-4'>
              Hi, I’m Mark Joseph Abaño, a web developer who loves building modern, efficient, and user-friendly web applications.
              I enjoy turning ideas into functional digital experiences using technologies like React, Tailwind CSS, Node.js, and Express.
              My goal is to create solutions that are not only visually appealing but also impactful and maintainable.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className='flex justify-center items-center order-1 sm:order-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="/imgs/profile.jpeg"
              alt="Profile"
              className='h-48 sm:h-64 md:h-90 lg:h-140 object-cover rounded-2xl shadow-md'
            />
          </motion.div>
        </div>
      </motion.section>

      <div className='h-auto w-lvw relative overflow-hidden my-5 text-white'>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={40}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>

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
          <div className='grid grid-cols-1'>
              {/* Project Header */}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <h4 className="text-xl sm:text-2xl font-semibold text-white">A Tour Action</h4>
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
              transition={{ duration: 0.8, delay:0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4 px-1 sm:px-3">
                A cross-platform mobile application built with <span className="text-white font-medium">Flutter (Dart)</span> and <span className="text-white font-medium">Firebase</span>, designed to enhance tourism in Baguio City through technology.
                The app empowers users to explore, plan, and experience the city’s historical and cultural landmarks interactively.
              </p>

              {/* Key Features */}
              <div className="mt-4">
                <h3 className="text-white font-semibold mb-2">Key Features:</h3>
                <ul className="text-gray-300 text-sm sm:text-base leading-relaxed list-disc list-inside space-y-1">
                  <li>📱 Personalized itineraries with custom tour route planning</li>
                  <li>🧭 AR navigation displaying landmarks based on real-time location</li>
                  <li>🌄 360° panoramic views for immersive destination previews</li>
                  <li>☁️ Firebase integration for secure cloud-based data management</li>
                </ul>
              </div>
            </motion.div>

            {/* Gallery */}
            <div className="mt-6">
              <RollingGallery autoplay={true} pauseOnHover={true} />
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Flutter", "Firebase", "AR", "Google Maps", "Weather API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-500/40 border border-gray-500/40 rounded-full text-xs sm:text-sm text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id='aboutMe'
        className='flex flex-col justify-center items-center mx-2 gap-3 mb-4'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Title name={"About Me"} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-full max-w-7xl mx-auto rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg text-gray-300 leading-relaxed'
        >
          <p>
            Hey there! 👋 I'm <strong>Mark Joseph Abaño</strong>, a passionate <strong>backend developer</strong> who loves building reliable, efficient, and scalable systems that power great digital experiences behind the scenes.
          </p><br />
          <p>
            While my main focus is on <strong>server-side development</strong>, working with technologies like <strong className='text-orange-300'>Node.js, Express, Firebase, MongoDB,</strong> and <strong className='text-orange-300'>MySQL</strong>, I also enjoy crafting clean and responsive user interfaces using <strong>React</strong> and <strong>Tailwind CSS</strong>.
          </p><br />
          <p>
            I’m experienced in designing and integrating <strong>RESTful APIs</strong>, managing databases, and connecting complex backend systems with intuitive frontends to deliver smooth end-to-end experiences.
          </p><br />
          <p>
            One of my most fulfilling projects was <strong className='text-orange-300'>A Tour Action</strong>, where I served as <strong>Lead Programmer</strong>, developing its backend using Firebase for real-time data management and integrating APIs that powered features like <strong>AR navigation</strong> and <strong>360° panoramic views</strong>.
          </p><br />
        </motion.div>

        <div className='grid grid-cols-1 max-w-7xl gap-3 md:grid-cols-3'>
          {/* Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'
          >
            <h2 className='text-center text-2xl md:text-3xl text-white'>Experiences</h2>
            <a href="https://getfullsuite.com/" target='blank'>
              <div className='flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors duration-200'>
                <h3>Fullsuite</h3>
                <ExternalLink className='h-4'/>
              </div>
            </a>
            <h4 className='text-orange-400'>Engineering Associate</h4>
            <h5 className='text-gray-400 text-xs'>September 2025 - December 2025</h5>
            <ul className='list-disc ml-5 indent-5 text-gray-300 italic space-y-2'>
              <li>Contributed to the development of internal systems like the Application Tracking System (ATS) and Suitlifer Website, improving UI performance by 20% and enhancing user experience.</li>
              <li>Assisted in backend development of the payroll system, automating data processing and computation features that reduced manual work by 25%.</li>
              <li>Supported deployments using Vercel and Render, ensuring stable and efficient releases across development sprints.</li>
            </ul>
          </motion.div>
          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'
          >
            <h2 className='text-center text-2xl md:text-3xl text-white'>Hobbies</h2>
            <ul className='ml-5 text-gray-300 italic space-y-2'>
              <li>🎬 Watching Anime, Movies, History, Documentaries</li>
              <li>🎮 Playing Online Games</li>
              <li>💪 Lifting Weights</li>
              <li>🃏 Playing Cards</li>
            </ul>
          </motion.div>
          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'
          >
            <h2 className='text-center text-2xl md:text-3xl text-white'>Certificates</h2>
            <ul className='ml-5 text-gray-300 italic space-y-2'>
              <li>✓ Computer Systems Servicing NCII</li>
              <li>✓ TOPCIT (Test of Practical Competency in ICT)</li>
              <li>✓ Civil Service Eligibility (Professional)</li>
              <li>✓ Teaching English as a Foreign Language (TEFL)</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id='contact'
        className='flex flex-col justify-center items-center mx-2 gap-3 mb-4'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.4 }}
        viewport={{ once: true }}
      >
        <Title name={"Get in Touch"} sub={"Let's build something amazing together"} />
        <div className='w-full max-w-7xl p-5 rounded-4xl bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-white'>
            <motion.div
              className='flex flex-col gap-3 sm:gap-4'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay:0.1 }}
              viewport={{ once: true }}
            >
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Connect with me</h2>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{type: "spring", stiffness: 300}}
                className='flex items-center h-20 w-full px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl'
              >
                <a href="https://www.linkedin.com/in/markabaño" target='blank' rel='noopener noreferrer'>
                  <div className='flex items-center gap-3'>
                  <SiLinkedin />
                  <p>Mark Joseph Abaño</p>
                </div>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{type: "spring", stiffness: 300}}
                className='flex items-center h-20 w-full px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl'
              >
                <a href="https://github.com/markabano" target='blank' rel='noopener noreferrer'>
                <div className='flex items-center gap-3'>
                  <SiGithub />
                  <p>Mark Joseph Abano</p>
                </div>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{type: "spring", stiffness: 300}}
                className='flex items-center h-20 w-full px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl'
              >
                <a href="mailto:markabanomain@gmail.com" target='blank' rel='noopener noreferrer'>
                  <div className='flex items-center gap-3'>
                    <SiGmail />
                    <p>markabanomain@gmail.com</p>
                  </div>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay:0.2 }}
              viewport={{ once: true }}
            >
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Request CV</h2>
              <form action="" method="POST">
                <div>
                  <label htmlFor="email">Your Email</label><br />
                  <input type="email" name="email" id="email" placeholder='your.email@example.com' className='w-full h-10 border border-white/30 backdrop-blur-md shadow-lg rounded-2xl px-3' required/>
                </div>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <textarea name="subject" id="subject" placeholder='Tell me about your project or inquiry...' className='w-full border border-white/30 backdrop-blur-md shadow-lg rounded-2xl px-3' rows={5} required></textarea>
                </div>
                <motion.button
                  className=" text-white w-full h-[40px] font-semibold rounded-lg shadow-lg bg-gradient-to-tl from-red-500 to-orange-300 cursor-pointer hover:text-red-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{scale:0.9}}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <footer className="w-full flex justify-center items-center px-3 py-5 mt-8 border-t border-white/10 bg-white/5 backdrop-blur-md">
        <span className="text-[10px] sm:text-xs md:text-sm text-center bg-gradient-to-tl from-red-500 to-orange-300 bg-clip-text text-transparent leading-relaxed">
          © 2025 <strong>Mark Joseph Abaño</strong>. Built with <strong>React</strong> & <strong>Tailwind CSS</strong>.
        </span>
      </footer>
    </div>
  )
}

export default App