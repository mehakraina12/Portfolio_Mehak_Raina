import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

const Contacts = () => {
  return (
    <section id="contact">
      <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-white" /* Change text color to white */
      >
        Get in Touch
        <br />
        <span className="text-lg text-white"> {/* Change email text color to white */}
          mehakraina2002@gmail.com
        </span>
      </motion.h1>

        <div className="text-center tracking-tighter">
    
          <div className="flex justify-center space-x-6 my-6">
            <a href="https://www.linkedin.com/in/yourprofile" 
               className="text-4xl text-gray-300 hover:text-cyan-500" 
               aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourprofile" 
               className="text-4xl text-gray-300 hover:text-gray-500" 
               aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          <a href="#" className="border-b"></a>
        </div>
      </div>
      {/* Copyright Notice */}
      <div className="text-center py-6 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Mehak Raina. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Contacts
