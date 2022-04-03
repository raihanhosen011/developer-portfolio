import { motion } from "framer-motion";

function withTransition(OriginalComponent){
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }}
      />
    </>
  );
};

export default withTransition;