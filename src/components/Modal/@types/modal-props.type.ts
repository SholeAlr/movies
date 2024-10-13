import { Icon } from 'iconsax-react'
import { ReactNode } from 'react'

export type ModalProps = {
  onClose?: () => void
  children?: ReactNode
  open?: boolean
  className?: string
  title?: string
  titleClass?: string
  closeButton?: boolean
  closeButtonClass?: string
  titleIcon?: Icon
}
