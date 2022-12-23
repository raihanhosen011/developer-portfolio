import { Variants } from 'framer-motion';

// fade up spring
export const fadeUpSpring = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 150,
    },
  },

  hidden: {
    opacity: 0,
    y: 60,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 150,
    },
  },
};

// fade left
export const fadeLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },

  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },
};


// fade left
export const fadeBottom = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },

  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },
};


// fade left
export const fadeRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },

  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },
};


// fade top
export const fadeTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },

  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },
};




// inital step
export const motionStep = {
  initial : "hidden",
  whileInView : "visible",
  viewport : { once: true }
}