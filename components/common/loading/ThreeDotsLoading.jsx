"use client"
import { motion } from 'framer-motion';

const LoadingDot = {
    display: "block",
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: "#5039ac",
    borderRadius: "50%"
};

const LoadingContainer = {
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around"
  };
  
  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2
      }
    },
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const DotVariants = {
    initial: {
      y: "0%"
    },
    animate: {
      y: "100%"
    }
  };
  
  const DotTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
  };

const ThreeDotsLoading = ({ title }) => {
  return (
    <div className="threedotsloading">
        <h2>{title}</h2>
        <motion.div
        className='threedotsloading__dots'
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
        >
            <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
            />
            <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
            />
            <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
            />
        </motion.div>
    </div>
  )
}

export default ThreeDotsLoading