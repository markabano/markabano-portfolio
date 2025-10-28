import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="fixed top-3 z-50 w-[90%] max-w-5xl rounded-4xl bg-white/15 backdrop-blur-md border border-white/15 shadow-lg px-6 py-3">
        <div className="relative flex items-center justify-between">
          <div>
            <img src="/logo.png" alt="Logo" className="h-9 rounded-4xl" />
          </div>
          {/* Desktop Menu (Centered) */}
          <ul className="hidden sm:flex flex-row text-white items-center gap-15">
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#home" className="hover:text-orange-300 transition">
                Home
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#projects" className="hover:text-orange-300 transition">
                Projects
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#aboutMe" className="hover:text-orange-300 transition">
                About Me
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#contact" className="hover:text-orange-300 transition">
                Contact
              </a>
            </motion.li>
          </ul>

          {/* Hamburger Button (Mobile, Positioned Right) */}
          <button
            className="absolute right-0 md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col mt-3 gap-3 text-white text-center md:hidden"
            >
              <li>
                <a
                  href="#home"
                  className="hover:text-orange-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-orange-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#aboutMe"
                  className="hover:text-orange-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Navbar;
