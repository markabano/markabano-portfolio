import './App.css'

function App() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center'>
        <nav className='flex justify-center bg-red-800 w-5xl rounded-full'>
          <ul className='flex flex-row text-white items-center gap-80 h-10'>
            <li><a href="http://">Home</a></li>
            <li><a href="http://">About Me</a></li>
            <li><a href="http://">Contact</a></li>
          </ul>
        </nav>
      </div>

      <section className='grid grid-cols-2 gap-4 w-7xl mt-5 bg-gray-400 rounded-4xl p-5'>
        <div className='grid grid-rows'>
          <h1 className='text-8xl'>MARK JOSEPH E. ABANO</h1>
          <p>
            Hi, I’m Mark Joseph Abano, a passionate web developer who loves building modern, efficient, and user-friendly web applications.
            I enjoy turning ideas into functional digital experiences using technologies like React, TypeScript, and Node.js.
            My goal is to create solutions that are not only visually appealing but also impactful and maintainable.
          </p>
        </div>
        <div className='flex justify-center'>
          <img src="./public/imgs/profile.jpeg" alt="Profile" className='h-130' />
        </div>
      </section>

      <section>
        <div>
          <h1>Projects</h1>
        </div>
      </section>

      <section>
        <div>
          <h1>Contacts</h1>
        </div>
      </section>
    </div>
  )
}

export default App