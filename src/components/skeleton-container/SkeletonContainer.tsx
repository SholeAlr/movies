import { CSSProperties, FC, ReactNode } from 'react'
import clsx from 'clsx'
import { generatorUUID } from '../../utils/uuid'

type Props = {
  children: ReactNode
  itemNumber: number
  containerClass?: string
  containerStyle?: CSSProperties
}
const SkeletonContainer: FC<Props> = ({
  children,
  itemNumber,
  containerClass,
  containerStyle,
}) => {
  const classes = clsx(containerClass)
  const items = Array.from(Array(itemNumber), (_, index) => index + 1)

  return (
    <div className={classes} style={containerStyle}>
      {items.map((item) => (
        <div key={generatorUUID() + item}>{children}</div>
      ))}
    </div>
  )
}

export default SkeletonContainer
