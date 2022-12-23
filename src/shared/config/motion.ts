import { Variants } from 'framer-motion';


// global
export let easeing = [0.6,-0.05,0.01,0.99];
export const transition = { duration:1.4, ease:[0.6,0.01,-0.05,0.9] };


// hero 
export const firstTitle = {
    initial:{
      y:-20,
    },
    animate:{
      y:0,
      transition:{
        delayChildren:0.4,
        staggerChildren:0.04,
        staggerDirection:-1
      }
    }
}

export const letter = {
    initial:{
      y:400,
    },
    animate:{
      y:0,
      transition:{ ...transition }
    }
};
  

export const heroContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
}
    
export const heroItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
}