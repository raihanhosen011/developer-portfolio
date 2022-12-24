import React, { ReactNode } from "react";
import { motion } from "framer-motion";


function Pager({ children, value } : { children: ReactNode, value: number }) {
  return (
    <div className="flex flex-col overflow-x-hidden w-full" >
      <motion.div
        className="flex flex-1 will-change-transform"
        transition={{
          tension: 190,
          friction: 30,
          mass: 0.5
        }}
        initial={false}
        animate={{ x: value * -100 + "%" }}
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            aria-hidden={value !== i}
            tabIndex={value === i ? 0 : -1}
            className='flex flex-col w-full items-stretch justify-start flex-shrink-0 overflow-x-hidden outline-none'
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Pager