import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer building production web and mobile features with
        React, Next.js, React Native, and Node.js. I care about clean UX,
        reliable APIs, and shipping work that holds up in real environments —
        from ERP workflows and event-driven backends to polished apps.
        Let's build something useful together.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
