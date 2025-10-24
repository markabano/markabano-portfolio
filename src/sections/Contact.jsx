import { motion } from "framer-motion";
import Title from "../components/Title";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({ email: "", subject: "" });
  const [status, setStatus] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email: formData.email,
          subject: formData.subject,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Email sent successfully!");
          setFormData({ email: "", subject: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("❌ Failed to send email. Try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col justify-center items-center mx-2 gap-3 mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Title
        name={"Get in Touch"}
        sub={"Let's build something amazing together"}
      />
      <div className="w-full max-w-7xl p-5 rounded-4xl bg-white/15 backdrop-blur-md border border-white/15 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-white">
          {/* Contact Links */}
          <motion.div
            className="flex flex-col gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Connect with me
            </h2>
            <a
              href="https://www.linkedin.com/in/markabaño"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center h-20 w-full px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <SiLinkedin />
                  <p>Mark Joseph Abaño</p>
                </div>
              </motion.div>
            </a>
            <a
              href="https://github.com/markabano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center h-20 w-full px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <SiGithub />
                  <p>Mark Joseph Abano</p>
                </div>
              </motion.div>
            </a>
            <a
              href="mailto:markabanomain@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center h-20 w-full px-5 bg-white/15 border border-white/15 backdrop-blur-md shadow-lg rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <SiGmail />
                  <p>markabanomain@gmail.com</p>
                </div>
              </motion.div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Request CV
            </h2>
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col gap-3"
            >
              <div>
                <label htmlFor="email">Your Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full h-10 border border-white/30 backdrop-blur-md shadow-lg rounded-2xl px-3"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <textarea
                  name="subject"
                  id="subject"
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full border border-white/30 backdrop-blur-md shadow-lg rounded-2xl px-3"
                  rows={5}
                  onChange={handleChange}
                  value={formData.subject}
                  required
                />
              </div>
              <motion.button
                className="text-white w-full h-[40px] font-semibold rounded-lg shadow-lg bg-gradient-to-tl from-red-500 to-orange-300 cursor-pointer hover:text-red-500"
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Send
              </motion.button>
            </form>
            {status && <p className="mt-3 text-sm text-gray-300">{status}</p>}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
