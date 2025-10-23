import { motion } from "framer-motion";

function Home() {
  return (
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
  )
}

export default Home