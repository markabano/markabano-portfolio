import { motion } from "framer-motion";
import Title from '../components/Title';
import { ExternalLink } from 'lucide-react';

function AboutMe() {
  return (
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
  )
}

export default AboutMe