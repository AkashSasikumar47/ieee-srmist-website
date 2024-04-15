import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ComingSoon = () => {
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
                        COMING SOON
                    </h3>
                    <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
                        Stay tuned for our exciting new website!
                    </h2>
                    <h4 className="max-w-screen-lg mx-auto text-justify font-sans font-base text-gray-400 text-sm sm:text-lg">
                        Thank you for visiting the IEEE SRM SB website! We're currently working on something awesome and can't wait to share it with you. Our new website is under construction and will be launching soon. In the meantime, please feel free to explore the sections below and subscribe to our updates to be notified when we go live!
                    </h4>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ComingSoon;