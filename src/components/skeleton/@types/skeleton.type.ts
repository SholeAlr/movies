export type Size = 'tiny' | 'small' | 'normal' | 'large'

export type SkeletonProps = {
  type?: SkeletopnType
  shape?: SkeletonShape
  width?: number | string
  height?: number | string
  className?: string
  size?: SkeletonSize
}

export type SkeletopnType = 'text' | 'icon' | 'image' | 'video' | 'card'

export type SkeletonShape = 'default' | 'full' | 'square' | 'circle' | 'rounded'

export type SkeletonSize = Exclude<Size, 'tiny'>
