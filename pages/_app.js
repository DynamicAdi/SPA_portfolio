import '@/styles/globals.scss'
import "@/styles/slick.css"
import { useRouter } from 'next/router'
import {motion, AnimatePresence} from "framer-motion"

import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  const router = useRouter();  
  return (
    <AnimatePresence mode='wait'>
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
        <Analytics />
        <motion.div className="slide-in"
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1]}}
        ></motion.div>
        <motion.div className="slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1]}}
        ></motion.div>

  </motion.div>
    </AnimatePresence>
    ) 
}
