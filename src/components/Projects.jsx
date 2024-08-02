import { motion } from 'framer-motion';
import project1 from "../assets/projects/ss.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

const projects = [
  {
    id: 1,
    title: 'Language Learning Platform',
    description: [
      'Developed a full-stack language learning platform enabling real-time language exchange and cultural understanding.',
      'HTML, CSS, JavaScript: Frontend Development',
      'Django and Pymongo: Backend Development',
      'MongoDB Atlas: Scalable Database Management',
      'Integrated real-time messaging and video calls.'
    ],
    imgSrc: project1,
    githubLink: 'https://github.com/mehakraina12/LingoPal-Your-Language-Companion.git'
  },
  {
    id: 2,
    title: 'Greenhouse Climate Control System ',
    description: [
      'HTML, CSS, JavaScript: Frontend Development',
      'MySQL: For managing and storing data.',
      'PHP: For dynamic content generation and database communication.',
      'NodeMCU: For sending messages over the internet via HTTP requests and enabling seamless data transfer.',
    ],
    imgSrc: project2,
    githubLink: 'https://github.com/mehakraina12/Greenhouse_Climate_Control_System.git'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: [
      'Created an intuitive interface using React',
      'Vite : For fast build and development.',
      'Tailwind CSS : For utility-first styling',
      'Framer Motion: For animations',
    ],
    imgSrc: project3,
    githubLink: 'https://github.com/mehakraina12/Portfolio_Mehak_Raina.git'
  },
  // {
  //   id: 3,
  //   title: 'Food Ordering Application',
  //   description: [
  //     'Created an intuitive and visually appealing user interface using HTML, CSS and JavaScript',
  //     'MySQL: For managing and storing data.',
  //     'PHP: For dynamic content generation and database communication.',
  //     'NodeMCU: For sending messages over the internet via HTTP requests and enabling seamless data transfer.',
  //   ],
  //   imgSrc: project2,
  // },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-6xl text-yellow-500 font-bold"
        >
          Projects
        </motion.h1>

        {projects.map((project, index) => (
          <div key={project.id} className="mb-10">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className={`text-3xl text-center mb-6 ${index === 0 ? 'mt-20' : ''} font-bold text-white`}
            >
              {project.title}
            </motion.h2>
            <div className="flex flex-wrap">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8"
              >
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img 
                    className="rounded-2xl hover:opacity-80 transition-opacity duration-300" 
                    src={project.imgSrc} 
                    alt={project.title} 
                  />
                </a>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2"
              >
                <div className="flex justify-center lg:justify-start">
                  <ul className="my-2 max-w-xl py-10 text-white text-xl font-sans mt-0 ml-8 pl-4 lg:pl-6 tracking-wider list-disc pl-5 ">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="mb-5">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;