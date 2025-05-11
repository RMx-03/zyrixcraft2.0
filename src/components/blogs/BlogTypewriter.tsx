import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BlogTypewriterProps {
  text: string;
}

const BlogTypewriter: FC<BlogTypewriterProps> = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.03
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  
  return (
    <div className="typewriter-container">
      <motion.h2
        className="typewriter-text"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sentenceVariants}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default BlogTypewriter; 