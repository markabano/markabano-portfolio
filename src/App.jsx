import './App.css'
import Balatro from './components/Balatro';
import LogoLoop from './components/LogoLoop';
import RollingGallery from './components/RollingGallery';
import Title from './components/Title';
import { SiReact, SiNodedotjs, SiTailwindcss, SiFlutter, SiExpress, SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

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
      <div className='flex justify-center'>
        <nav className='fixed top-2 z-1 flex justify-center w-7xl rounded-full bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <ul className='flex flex-row text-white items-center gap-30 h-14 px-10'>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Balatro
          isRotate={false}
          mouseInteraction={true}
          pixelFilter={700}
        />
      </div>

      <section id="home">
        <div className='grid grid-cols-2 gap-4 w-7xl mt-20 text-white rounded-4xl p-5 bg-white/10 backdrop-blur-md border border-white/10 shadow-lg'>
          <div className='grid grid-rows'>
            <h1 className='text-8xl'>MARK JOSEPH E. <span className='bg-gradient-to-tl from-red-500 to-orange-300 bg-clip-text text-transparent'>ABAÑO</span></h1>
            <p className='text-gray-300'>
              Hi, I’m Mark Joseph Abaño, a web developer who loves building modern, efficient, and user-friendly web applications.
              I enjoy turning ideas into functional digital experiences using technologies like React, Tailwindcss, Node.js and Express.
              My goal is to create solutions that are not only visually appealing but also impactful and maintainable.
            </p>
          </div>
          <div className='flex justify-center'>
            <img src="./public/imgs/profile.jpeg" alt="Profile" className='h-130 rounded-2xl' />
          </div>
        </div>
      </section>

      <div style={{ height: 'auto', width: '100vw', position: 'relative', overflow: 'hidden', color: 'white', margin: '10px 0px'}}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>

      <section id='projects' className='flex flex-col justify-center items-center gap-3 mb-4'>
        <Title name={"Featured Projects"} sub={"Building meaningful solutions with modern technology"} />
        <div className='grid grid-cols-2 text-white w-7xl rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <div>
            <div className='flex items-center gap-2'>
              <h4 className='text-2xl'>A Tour Action</h4>
              <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-xs text-red-300">
                Lead Programmer
              </span>
            </div>
            <h2 className='px-3 text-orange-300'>Capstone Project</h2>
            <p className='px-5'>
              <br />
              <span className='text-gray-300'>
                A cross-platform mobile application built with Flutter (Dart) and Firebase, designed to enhance tourism in Baguio City through technology.
                The app empowers users to explore, plan, and experience the city’s historical and cultural landmarks interactively.<br />
              </span>
              <br />
              Key Features:<br />
              <span className='text-gray-300'>
              📱 Personalized itineraries with custom tour route planning<br />

              🧭 AR navigation displaying landmarks based on real-time location<br />

              🌄 360° panoramic views for immersive destination previews<br />

                ☁️ Firebase integration for secure cloud-based data management<br />
              </span>
            </p>
            <div className='flex gap-2 mt-5'>
              <span className="px-3 py-1 bg-gray-500/50 border border-gray-500/50 rounded-full text-xs text-gray-300">
                Flutter
              </span>
              <span className="px-3 py-1 bg-gray-500/50 border border-gray-500/50 rounded-full text-xs text-gray-300">
                Firebase
              </span>
              <span className="px-3 py-1 bg-gray-500/50 border border-gray-500/50 rounded-full text-xs text-gray-300">
                AR
              </span>
              <span className="px-3 py-1 bg-gray-500/50 border border-gray-500/50 rounded-full text-xs text-gray-300">
                Google Maps
              </span>
              <span className="px-3 py-1 bg-gray-500/50 border border-gray-500/50 rounded-full text-xs text-gray-300">
                Weather API
              </span>
            </div>
          </div>
          <div>
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>
        </div>
      </section>

      <section id='aboutMe' className='flex flex-col justify-center items-center gap-3 mb-4'>
        <Title name={ "About Me" } />
        <div className='text-white w-7xl rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <p className='text-gray-300'>
            Hey there! 👋 I'm <strong>Mark Joseph Abaño</strong>, a passionate <strong>backend developer</strong> who loves building reliable, efficient, and scalable systems that power great digital experiences behind the scenes.
            <br />
            <br />
            While my main focus is on <strong>server-side development</strong>, working with technologies like <strong className='text-orange-300'>Node.js, Express, Firebase, MongoDB,</strong> and <strong className='text-orange-300'>MySQL</strong>, I also enjoy crafting clean and responsive user interfaces using <strong>React</strong> and <strong>Tailwind CSS</strong>.
            <br />
            <br />
            I’m experienced in designing and integrating <strong>RESTful APIs</strong>, managing databases, and connecting complex backend systems with intuitive frontends to deliver smooth end-to-end experiences.
            <br />
            <br />
            One of my most fulfilling projects was <strong className='text-orange-300'>A Tour Action</strong>, where I served as <strong>Lead Programmer</strong>, developing its backend using Firebase for real-time data management and integrating APIs that powered features like <strong>AR navigation</strong> and <strong>360° panoramic views</strong>.
          </p>
        </div>

        <div className='grid grid-cols-3 w-7xl gap-2'>
          <div className='text-white rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
            <h2 className='text-center text-3xl'>Experiences</h2>
            <a href="https://getfullsuite.com/" target='blank'>
              <div className='flex items-center gap-1 text-blue-400 hover:text-blue-500'>
                <h3>Fullsuite</h3>
                <ExternalLink className='h-4'/>
              </div>
            </a>
            <h4 className='text-orange-400'>Engineering Associate</h4>
            <h5 className='text-gray-400 text-xs'>September 2025 - December 2025</h5>
            <ul className='list-disc ml-5 indent-5 text-gray-300 italic'>
              <li>Contributed to the development of internal systems like the Application Tracking System (ATS) and Suitlifer Website, improving UI performance by 20% and enhancing user experience.</li>
              <li>Assisted in backend development of the payroll system, automating data processing and computation features that reduced manual work by 25%.</li>
              <li>Supported deployments using Vercel and Render, ensuring stable and efficient releases across development sprints.</li>
            </ul>
          </div>
          <div className='text-white rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
            <h2 className='text-center text-3xl'>Hobbies</h2>
            <ul className='flex flex-col text-gray-300 mt-5 gap-3 italic'>
              <li>🎬 Watching Anime, Movies, History, Documentaries</li>
              <li>🎮 Playing Online Games</li>
              <li>💪 Lifting Weights</li>
              <li>🃏 Playing Cards</li>
            </ul>
          </div>
          <div className='text-white rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
            <h2 className='text-center text-3xl'>Certificates</h2>
            <ul className='flex flex-col text-gray-300 mt-5 gap-3 italic'>
              <li>✓ Computer Systems Servicing NCII</li>
              <li>✓ TOPCIT (Test of Practical Competency in ICT)</li>
              <li>✓ Civil Service Eligibility (Professional)</li>
              <li>✓ Teaching English as a Foreign Language (TEFL)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='contact' className='flex flex-col justify-center items-center gap-3 mb-4'>
        <Title name={ "Get in Touch" } sub={"Let's build something amazing together"} />
        <div className='text-white w-7xl rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-between'>
              <h2 className='text-3xl'>Connect with me</h2>
              <div className='flex items-center h-20 w-100 px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl'>
                <a href="https://www.linkedin.com/in/markabaño" target='blank'>
                <div className='flex items-center gap-3'>
                  <SiLinkedin />
                  <p>Mark Joseph Abaño</p>
                </div>
                </a>
              </div>
              <div className='flex items-center h-20 w-100 px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl'>
                <a href="https://github.com/markabano" target='blank'>
                <div className='flex items-center gap-3'>
                  <SiGithub />
                  <p>Mark Joseph Abano</p>
                </div>
                </a>
              </div>
              <div className='flex items-center h-20 w-100 px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl'>
                <a href="mailto:markabanomain@gmail.com" target='blank'>
                  <div className='flex items-center gap-3'>
                    <SiGmail />
                    <p>markabanomain@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <h2 className='text-3xl'>Request CV</h2>
              <form action="" method="POST">
                <div>
                  <label htmlFor="email">Your Email</label><br />
                  <input type="email" name="email" id="email" placeholder='your.email@example.com' className='w-full h-10 border border-white/30 backdrop-blur-md shadow-lg rounded-2xl px-3' required/>
                </div>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <textarea name="subject" id="subject" placeholder='Tell me about your project or inquiry...' className='w-full border border-white/30 backdrop-blur-md shadow-lg rounded-2xl px-3' rows={5} required></textarea>
                </div>
                <button type="submit" className='rounded-2xl w-full h-[40px] bg-gradient-to-tl from-red-500 to-orange-300 cursor-pointer'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span className='bg-gradient-to-tl from-red-500 to-orange-300 bg-clip-text text-transparent'>© 2025 Mark Joseph Abaño. Built with React & Tailwind CSS.</span>
      </footer>
    </div>
  )
}

export default App