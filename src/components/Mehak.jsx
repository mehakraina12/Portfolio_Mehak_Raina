import { HERO_CONTENT } from "../constants";
import photograph from "../assets/profile.jpg";
import { delay, motion } from "framer-motion";
import Technologies from "./Technologies";
import resume from "../assets/resume.pdf";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Mehak = () => {
    return (
        <section id="home" className="pt-20">
            <div className="border-b border-neutral-900 pb-4 lg:mb-35">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center lg:text-left mt-8 lg:mt-20"
                            >
                                <h1 className="text-4xl font-thick tracking-tight lg:text-6xl" style={{ fontFamily: 'Kaushan Script, cursive' }}>
                                    <span className="block text-white">Hey There, I am</span>
                                </h1>
                            </motion.div>
                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-16 text-6xl font-bold tracking-tight lg:mt-5 lg:text-8xl text-yellow-500"
                                style={{ fontFamily: 'Kaushan Script, cursive' }}
                            >
                                Mehak Raina
                            </motion.h1>
                            <motion.span
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-gradient-to-r from-lime-300 via-teal-300 to-cyan-300 bg-clip-text text-3xl tracking-tight text-transparent italic"
                            >
                                Turning ideas into interactive web solutions.
                            </motion.span>
                            <Technologies />
                            <motion.div
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="mt-0 mb-6"
                            >
                                <a
                                    href={resume}
                                    download="Mehak_Raina_Resume.pdf"
                                    className="inline-block px-6 py-3 text-lg font-semibold text-black bg-yellow-500 rounded-full hover:bg-yellow-600 transition duration-300"
                                >
                                    Download Resume
                                </a>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8 lg:mt-19">
                        <div className="flex justify-center">
                            <motion.img
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                src={photograph} alt="Mehak Raina" className="w-1/2 h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mehak;
