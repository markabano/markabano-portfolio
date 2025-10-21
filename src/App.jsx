import './App.css'
import Balatro from './components/Balatro';
import LogoLoop from './components/LogoLoop';
import RollingGallery from './components/RollingGallery';
import Title from './components/Title';
import { SiReact, SiNodedotjs, SiTailwindcss, SiFlutter, SiExpress, SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

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
            <h1 className='text-8xl'>MARK JOSEPH E. ABAÑO</h1>
            <p>
              Hi, I’m Mark Joseph Abaño, a web developer who loves building modern, efficient, and user-friendly web applications.
              I enjoy turning ideas into functional digital experiences using technologies like React, Tailwindcss, Node.js and Express.
              My goal is to create solutions that are not only visually appealing but also impactful and maintainable.
            </p>
          </div>
          <div className='flex justify-center'>
            <img src="./public/imgs/profile.jpeg" alt="Profile" className='h-130' />
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
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>

      <section id='projects' className='flex flex-col justify-center items-center gap-3 mb-4'>
        <Title name={"Projects"} />
        <div className='grid grid-cols-2 text-white w-7xl rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <div>
            <h1 className='text-2xl'>A Tour Action</h1>
            <h2 className='px-3'>Capstone Project - Lead Programmer</h2>
            <p className='px-5'>
              A cross-platform mobile application built with Flutter (Dart) and Firebase, designed to enhance tourism in Baguio City through technology.
              The app empowers users to explore, plan, and experience the city’s historical and cultural landmarks interactively.<br />

              Key Features:<br />

              📱 Personalized Itineraries: Users can create and manage custom tour routes for their trip.<br />

              🧭 Augmented Reality (AR) Navigation: Interactive AR maps display nearby landmarks and historical details based on the user’s real-time location.<br />

              🌄 360° Panoramic Views: Immersive previews of tourist destinations to help travelers visualize spots before visiting.<br />

              ☁️ Firebase Integration: Secure cloud-based data management for users, itineraries, and destinations.<br />

              💡 Innovative Experience: Blends education, technology, and travel to create an engaging digital tour companion.<br />
              </p>
          </div>
          <div>
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>
        </div>
      </section>

      <section id='aboutMe' className='flex flex-col justify-center items-center gap-3 mb-4'>
        <Title name={ "About Me" } />
        <div className='text-white w-7xl rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <p className='indent-10'>
            Hey there! 👋 I’m Mark Joseph Abaño, a passionate backend developer who loves building reliable, efficient, and scalable systems that power great digital experiences behind the scenes.
            While  most people see the design and interface, I find my excitement in the logic, architecture, and data that make everything work seamlessly.
          </p>
          <br />
          <p className='indent-10'>
            I specialize in server-side development, working with technologies like Node.js, Express, TypeScript, Firebase, and PostgreSQL, and I’m experienced in designing RESTful APIs, managing databases, and integrating complex backend systems with front-end applications. I take pride in writing clean, maintainable code that not only works — but scales.
          </p>
          <p className='indent-10'>
            My journey as a developer began with a curiosity about how apps function under the hood — how data travels, how servers respond, and how everything connects. That curiosity grew into a full-fledged passion for backend engineering, where I’ve learned how important performance, structure, and security are to any successful application.
          </p>
          <br />
          <p className='indent-10'>
            One of my most fulfilling projects was A Tour Action, a mobile app designed to enhance tourism in Baguio City. I served as the Lead Programmer, developing its backend using Firebase for real-time data management and integrating APIs that supported features like Augmented Reality (AR) navigation and 360° panoramic views of tourist spots. It was an exciting challenge that taught me how to design systems that are both technically sound and impactful to users.
          </p>
          <p className='indent-10'>
            I enjoy solving problems, optimizing performance, and building systems that empower the front end to shine. Whether it’s structuring databases, managing cloud integrations, or automating processes, I’m always looking for ways to make technology work smarter and smoother.
          </p>
          <br />
          <p className='indent-10'>
            Outside of coding, I love learning about system design, cloud computing, and emerging backend technologies. I also enjoy exploring new tools and frameworks that can make development faster and more reliable. My ultimate goal is to keep growing as a developer who builds systems that are not only functional — but meaningful, maintainable, and ready for the future.
          </p>
        </div>

        <div className='grid grid-cols-3 w-7xl gap-2'>
          <div className='text-white rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
            <h1 className='text-center text-3xl'>Experiences</h1>
            <a href="https://getfullsuite.com/" target='blank'><h2>Fullsuite</h2></a>
            <h3>Engineering Associate</h3>
            <h4>September 2025 - December 2025</h4>
            <ul className='list-disc ml-5 indent-5'>
              <li>Contributed to the development of internal systems like the Application Tracking System (ATS) and Suitlifer Website, improving UI performance by 20% and enhancing user experience.</li>
              <li>Assisted in backend development of the payroll system, automating data processing and computation features that reduced manual work by 25%.</li>
              <li>Supported deployments using Vercel and Render, ensuring stable and efficient releases across development sprints.</li>
            </ul>
          </div>
          <div className='text-white rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
            <h1 className='text-center text-3xl'>Hobbies</h1>
            <ul className='list-disc'>
              <li>Watching Anime, Movies, Youtube, Tiktok</li>
              <li>Playing Online Games</li>
              <li>Lifting Weights</li>
            </ul>
          </div>
          <div className='text-white rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
            <h1 className='text-center text-3xl'>Certificates</h1>
            <ul className='list-disc'>
              <li>Computer Systems Servicing NCII</li>
              <li>TOPCIT</li>
              <li>Civil Service Eligibility (Professional)</li>
              <li>Teaching English as a Foreign Language (TEFL)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='contact' className='flex flex-col justify-center items-center gap-3 mb-4'>
        <Title name={ "Contact" } />
        <div className='text-white w-7xl rounded-4xl p-5 bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center items-center'>
              <a href="https://www.linkedin.com/in/markabaño" target='blank'>
                <div className='flex items-center gap-3'>
                  <SiLinkedin />
                  <p>Mark Joseph Abaño</p>
                </div>
              </a>
              <a href="https://github.com/markabano" target='blank'>
                <div className='flex items-center gap-3'>
                  <SiGithub />
                  <p>Mark Joseph Abano</p>
                </div>
              </a>
              <a href="mailto:markabanomain@gmail.com" target='blank'>
                <div className='flex items-center gap-3'>
                  <SiGmail />
                  <p>markabanomain@gmail.com</p>
                </div>
              </a>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <h3 className='text-3xl'>Request CV</h3>
              <form action="">
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" className='border-1 ml-2' />
                </div>
                <div>
                  <label htmlFor="subject">Subject:</label>
                  <textarea name="subject" id="subject" className='border-1 w-full' rows={5}></textarea>
                </div>
                <button type="submit" className='rounded-full w-[100px] bg-red-800 hover:bg-red-700 cursor-pointer'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App