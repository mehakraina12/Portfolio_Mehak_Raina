import { motion } from "framer-motion";

// Example skills
const skills = [
  { skill: "HTML, CSS, JavaScript", percentage: 97 },
  { skill: "SQL", percentage: 95 },
  { skill: "ReactJS", percentage: 90 },
  { skill: "Django", percentage: 85 },
  { skill: "SpringBoot", percentage: 80 },
  { skill: "NodeJS", percentage: 80 },
  // Add more skills as needed
];

const description = [
  'I recently graduated from DAIICT with a BTech in Information and Communication Technology.',
  'With a solid foundation in various technical aspects, I’ve worked on projects involving technologies like HTML, CSS, JavaScript, React, Node.js, Django, SpringBoot, PostgreSQL, PHP, and MongoDB.',
  'Driven by a passion for the ever-evolving field of software, I am dedicated to exploring new technologies and enhancing my skills with enthusiasm and curiosity.',
  'My goal is to create innovative solutions and contribute meaningfully to the tech industry.'
];

const About = () => {
  return (
    <section id="about">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-6xl text-yellow-500 font-bold"
        >
          About Me
        </motion.h1>
        <div className="flex flex-wrap">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
          >
            <div className="flex flex-col items-center lg:items-start w-full">
              <div className="w-full">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-lg font-semibold mb-1">{skill.skill}</p>
                    <div className="relative">
                      <div className="h-4 bg-gray-300 rounded-full">
                        <div
                          className="h-4 bg-yellow-500 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <ul className="my-2 max-w-xl py-10 text-white text-xl font-sans mt-10 ml-8 pl-4 lg:pl-6 tracking-wider list-disc pl-5">
                {description.map((sentence, index) => (
                  <li key={index} className="mb-5">{sentence}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
