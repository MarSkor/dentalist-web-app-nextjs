"use client"
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motions";


export const MotionRow = ({ children, className, }) => {
  return(
    <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

export const MotionRowOnce = ({ children, className }) => {
  return(
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
      variants={fadeIn("up", "tween", 0.4, 1)}
      className={className}
      >
        {children} 
      </motion.div>
    </motion.div>
  )
}

const MotionWrapper = ({ children, className }) => {
  return(
    <MotionRow>
      <motion.div
      variants={fadeIn("up", "tween", 0.4, 1)}
      className={className}
      >
        {children} 
      </motion.div>
    </MotionRow>
  )
}

export default MotionWrapper