// Helper function to toggle scroll lock
function toggleBodyScrollLock(isLocked: boolean): void {
  const body = document.body
  if (isLocked) {
    // Save the current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

    // Prevent scrolling but keep the scrollbar visible
    body.style.overflowY = 'hidden'

    // Restore the scroll position after locking
    setTimeout(() => window.scrollTo(0, scrollPosition), 0)
  } else {
    // Reset styles to allow normal scrolling
    body.style.overflowY = ''
  }
}

export { toggleBodyScrollLock }
