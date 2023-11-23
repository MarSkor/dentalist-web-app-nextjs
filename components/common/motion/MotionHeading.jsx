"use client"
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";
import { Heading } from "..";
import { MotionRow } from "./MotionBlog";

const MotionHeading = ({ variant, label, headingText, description }) => {
    const classNames = `heading--${variant}`
    return(
      <MotionRow
      >
        <motion.div
        variants={fadeIn("up", "tween", 0.4, 1)}
        className={classNames}
        >
          <Heading 
          label={label} 
          headingLevel={"h2"} 
          headingText={headingText} 
          description={description}
          />
        </motion.div>
      </MotionRow>
    )
}
  
export default MotionHeading