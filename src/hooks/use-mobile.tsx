import * as React from 'react'

const MOBILE_BREAKPOINT = 768
/** When embedded in an iframe (e.g. Framer), use a higher breakpoint so we show
 *  mobile layout in narrow iframes instead of scaled-down desktop. */
const IFRAME_MOBILE_BREAKPOINT = 1024

function getMobileBreakpoint() {
  if (typeof window === 'undefined') return MOBILE_BREAKPOINT
  const inIframe = window.self !== window.top
  return inIframe ? IFRAME_MOBILE_BREAKPOINT : MOBILE_BREAKPOINT
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const breakpointRef = React.useRef(getMobileBreakpoint())

  React.useEffect(() => {
    const breakpoint = getMobileBreakpoint()
    breakpointRef.current = breakpoint
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < breakpointRef.current)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < breakpoint)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
