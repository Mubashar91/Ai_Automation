import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const EMBED_MOBILE_BREAKPOINT = 768
const EMBED_SMALL_BREAKPOINT = 639
/** When in iframe, use higher breakpoints so we show mobile layout in narrow embeds. */
const IFRAME_EMBED_MOBILE_BREAKPOINT = 1024
const IFRAME_EMBED_SMALL_BREAKPOINT = 768

function updateEmbedResponsiveClasses() {
  const rootEl = document.documentElement

  const isInIframe = (() => {
    try {
      return window.self !== window.top
    } catch {
      return true
    }
  })()

  let measuredWidth = window.innerWidth

  if (isInIframe && window.frameElement) {
    const rect = window.frameElement.getBoundingClientRect()
    if (rect.width) measuredWidth = rect.width
  }

  const mobileBreak = isInIframe ? IFRAME_EMBED_MOBILE_BREAKPOINT : EMBED_MOBILE_BREAKPOINT
  const smallBreak = isInIframe ? IFRAME_EMBED_SMALL_BREAKPOINT : EMBED_SMALL_BREAKPOINT
  rootEl.classList.toggle('embed-mobile', measuredWidth <= mobileBreak)
  rootEl.classList.toggle('embed-small', measuredWidth <= smallBreak)
}

updateEmbedResponsiveClasses()
window.addEventListener('resize', updateEmbedResponsiveClasses)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,    
)