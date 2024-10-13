import { useEffect, useState } from 'react'

type DeviceSize = {
  width: number
  height: number
}

type DeviceSizeReturn = {
  windowSize: DeviceSize
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export const useDeviceSize = (): DeviceSizeReturn => {
  const [windowSize, setWindowSize] = useState<DeviceSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isTablet, setIsTablet] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  useEffect(() => {
    const handleWidowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleWidowSize)

    return () => {
      window.removeEventListener('resize', handleWidowSize)
    }
  }, [])

  useEffect(() => {
    const { width } = windowSize
    setIsMobile(width < 640)
    setIsTablet(width >= 640 && width < 1024)
    setIsDesktop(width >= 1024)
  }, [windowSize, windowSize.width])

  return { windowSize, isMobile, isTablet, isDesktop }
}
