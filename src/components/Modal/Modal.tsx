import React, { FC, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import BackDrop from '../Backdrop/BackDrop'
import { IconElement } from '../IconElemnt'
import { Add } from 'iconsax-react'
import { ModalProps } from './@types/modal-props.type'
import { toggleBodyScrollLock } from './helpers/bodyScroll.helper'

// Animation definitions
const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0px',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

// Global modal count
let modalCount = 0

const Modal: FC<ModalProps> = ({
  onClose,
  children,
  open,
  className,
  title,
  titleClass,
  closeButton,
  closeButtonClass,
  titleIcon,
}) => {
  const classes = clsx(
    'h-min rounded-xl p-4 bg-white relative w-[clamp(50%,700px,80%)] bg-slate-800 lg:w-fit ',
    className,
  )

  useEffect(() => {
    if (open) {
      modalCount++
      if (modalCount === 1) {
        toggleBodyScrollLock(true)
      }
    }

    return () => {
      if (open) {
        modalCount--
        if (modalCount === 0) {
          toggleBodyScrollLock(false)
        }
      }
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <BackDrop onClick={onClose}>
          <motion.div
            className={classes}
            onClick={(e: any) => e.stopPropagation()}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {/* Close Icon button */}
            {(closeButton || title) && (
              <>
                {closeButton && (
                  <IconElement
                    icon={Add}
                    onClick={onClose}
                    className={clsx(
                      'absolute top-3.5 left-3.5 cursor-pointer size-6 rotate-45 text-gray-60',
                      closeButtonClass,
                    )}
                  />
                )}

                {/* Title */}
                {title && (
                  <p
                    className={clsx(
                      titleClass,
                      'flex items-center text-center gap-x-2 text-lg font-medium text-gray-600',
                    )}
                  >
                    {/* icon in the title */}
                    {titleIcon && (
                      <IconElement icon={titleIcon} className='size-5' />
                    )}
                    {title}
                  </p>
                )}
              </>
            )}

            {/* Body */}
            {children}
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  )
}

export default Modal
