import { FC } from 'react'
import { motion } from 'framer-motion'
import { BackdropProps } from './@types/backdrop-props.type'

const BackDrop: FC<BackdropProps> = ({ children, onClick, ...props }) => {
  return (
    <motion.div
      onClick={onClick}
      className='fixed z-[999] top-0 left-0 bottom-0 !mt-0 h-full w-full flex items-center justify-center bg-black/50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default BackDrop
