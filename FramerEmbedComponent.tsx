// @ts-nocheck
// This file is designed for Framer's code editor - ignore local TypeScript errors
import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect, useRef } from "react"

interface Props {
  url: string
  minHeight?: number
}

export default function EmbeddedSite({ url, minHeight = 800 }: Props) {
  const [iframeHeight, setIframeHeight] = useState(minHeight)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      // Update iframe height based on content
      if (iframeRef.current) {
        try {
          const contentHeight = iframeRef.current.contentWindow?.document.documentElement.scrollHeight || minHeight
          setIframeHeight(Math.max(contentHeight, minHeight))
        } catch (e) {
          setIframeHeight(minHeight)
        }
      }
    }

    const timer = setTimeout(handleResize, 500)
    window.addEventListener("resize", handleResize)

    // Listen for messages from iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'iframe-ready' || event.data.type === 'iframe-resize') {
        handleResize()
      }
    }
    window.addEventListener("message", handleMessage)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("message", handleMessage)
    }
  }, [minHeight])

  return (
    <>
      <style>{`
        .responsive-iframe-container {
          width: 100%;
          max-width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }
        
        .responsive-iframe-container iframe {
          width: 100%;
          max-width: 100%;
          border: none;
          display: block;
          background-color: #fff;
        }
        
        /* On small screens: force container to viewport width so the iframe is narrow
           and the embedded site receives a small innerWidth and shows mobile layout
           instead of scaled-down desktop. */
        @media (max-width: 768px) {
          .responsive-iframe-container {
            width: 100vw;
            max-width: 100vw;
            min-width: 100vw;
            height: auto;
            min-height: 100vh;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            box-sizing: border-box;
          }
          
          .responsive-iframe-container iframe {
            width: 100%;
            max-width: 100%;
            height: 100vh;
            min-height: 100vh;
            transform: none;
            transform-origin: top left;
          }
        }
        
        @media (max-width: 480px) {
          .responsive-iframe-container iframe {
            height: 120vh;
            min-height: 120vh;
          }
        }
      `}</style>
      <div
        ref={containerRef}
        className="responsive-iframe-container"
        style={{
          width: isMobile ? "100vw" : "100%",
          maxWidth: isMobile ? "100vw" : "100%",
          minWidth: isMobile ? "100vw" : undefined,
          height: "100%",
          position: "relative",
          left: isMobile ? "50%" : undefined,
          transform: isMobile ? "translateX(-50%)" : undefined,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <iframe
          ref={iframeRef}
          src={url}
          style={{
            width: "100%",
            maxWidth: "100%",
            minHeight: `${minHeight}px`,
            height: isMobile ? "100vh" : "100%",
            border: "none",
            display: "block",
            backgroundColor: "#fff",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
          loading="lazy"
          scrolling="auto"
        />
      </div>
    </>
  )
}

addPropertyControls(EmbeddedSite, {
  url: {
    type: ControlType.String,
    title: "Site URL",
    defaultValue: "https://your-site.com/all-components.html",
  },
  minHeight: {
    type: ControlType.Number,
    title: "Minimum Height (px)",
    defaultValue: 800,
    min: 400,
    max: 2000,
    step: 100,
  },
})
