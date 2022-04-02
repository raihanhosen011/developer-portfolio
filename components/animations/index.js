export const pageAnimationOne = {
   in : {
     opacity: 1,
     x : -300  
   },
   out : {
     opacity: 0,
     x : 300  
   },
   end : {
     opacity : 1,
     x : 0  
   }
}


export const textAnimationOne = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
};


// custom easing
let easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 1.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: easing
    }
  }
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};