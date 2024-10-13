import { FC } from 'react'
import { SkeletonProps, SkeletonShape, SkeletonSize, SkeletopnType } from './@types/skeleton.type'
import clsx from 'clsx'

const typeClasses: Record<SkeletopnType, string> = {
  text: 'skeleton-text',
  card: 'skeleton-card',
  icon: 'skeleton-icon',
  image: 'skeleton-image',
  video: 'skeleton-video',
}

const shapeClasses: Record<SkeletonShape, string> = {
  circle: 'skeleton-circle',
  default: '',
  full: 'skeleton-full',
  square: 'skeleton-square',
  rounded: '',
}

const sizeClasses: Record<SkeletonSize, string> = {
  large: 'skeleton-lg',
  normal: 'skeleton-base',
  small: 'skeleton-sm',
}

export const Skeleton: FC<SkeletonProps> = ({
  className,
  height,
  width,
  type = 'card',
  shape = 'default',
  size = 'normal',
}) => {
  const classes = clsx(
    'skeleton',
    className,
    { [`${typeClasses[type]}`]: type },
    { [`${shapeClasses[shape]}`]: shape },
    { [`${sizeClasses[size]}`]: size },
  )

  return <div style={{ width: `${width}px`, height: `${height}px` }} className={classes} />
}
