import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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

  rootEl.classList.toggle('embed-mobile', measuredWidth <= 768)
  rootEl.classList.toggle('embed-small', measuredWidth <= 639)
}

updateEmbedResponsiveClasses()
window.addEventListener('resize', updateEmbedResponsiveClasses)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,    
)