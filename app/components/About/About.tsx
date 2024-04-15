import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <motion.div
            className="bg-black"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="bg-black max-w-screen-2xl mx-auto px-4 py-6 md:px-8 md:py-10">
                <motion.div
                    className="mx-auto mb-10 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-700 text-xs lg:text-base">
                        ABOUT US
                    </h3>
                </motion.div>
                <motion.div
                    className="group aspect-w-16 aspect-h-9 relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    <img
                        className="w-full object-cover rounded-xl lg:rounded-xl transition-transform transform group-hover:scale-105"
                        src="/assets/img/About_Banner.png"
                        alt="IEEE SRM Student Branch"
                    />
                </motion.div>
                <motion.div
                    className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ x: -20, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
                            Discover IEEE SRMIST Student Branch
                        </h2>
                        <h3 className="mt-2 md:mt-4 text-sm font-body text-gray-400 text-justify">
                            IEEE SRM Student Branch is a dynamic community dedicated to fostering technological innovation and excellence. As a proud chapter of the world's largest professional organization, IEEE, we strive to inspire, educate, and empower our members.
                        </h3>
                    </motion.div>
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ x: 20, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                            <IconBlock
                                title="Our Founding"
                                content="IEEE SRMIST SB was established in 2015 with a vision to inspire, educate, and empower the next generation of engineers and innovators."
                            />
                            <IconBlock
                                title="Our Values"
                                content="We are driven by innovation, education, community, and excellence. These values guide our actions and initiatives."
                            />
                            <IconBlock
                                title="Our Journey"
                                content="Over the years, we've organized impactful events, workshops, and initiatives, fostering talent and technological advancement."
                            />
                            <IconBlock
                                title="Membership Benefits"
                                content="Joining IEEE opens doors to a world of resources, networking, and professional development opportunities."
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

interface IconBlockProps {
    title: string;
    content: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ title, content }) => {
    return (
        <motion.div
            className="flex gap-x-5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
        >
            <div className="grow">
                <h3 className="text-2xl text-white font-body font-bold cursor-auto">
                    {title}
                </h3>
                <p className="mt-1 text-sm font-body text-gray-400 text-justify">
                    {content}
                </p>
            </div>
        </motion.div>
    );
};

export default About;