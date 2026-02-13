import { useEffect, useRef, useState } from "react"

interface ResponsiveIframeProps {
  src: string
  className?: string
  minHeight?: number
}

export default function ResponsiveIframe({
  src,
  className = "",
  minHeight = 800,
}: ResponsiveIframeProps) {
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
    // Send message to iframe to notify about container size
    const handleResize = () => {
      if (iframeRef.current && containerRef.current) {
        try {
          iframeRef.current.contentWindow?.postMessage(
            {
              type: "resize-iframe",
              width: containerRef.current.offsetWidth,
              height: containerRef.current.offsetHeight,
            },
            "*"
          )
        } catch (e) {
          // Cross-origin restrictions may prevent this
        }
      }
    }

    const timer = setTimeout(handleResize, 500)
    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <style>{`
        .responsive-iframe-wrapper {
          width: 100%;
          max-width: 100%;
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          box-sizing: border-box;
        }
        
        .responsive-iframe-wrapper .iframe-container {
          width: 100%;
          max-width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .responsive-iframe-wrapper iframe {
          width: 100%;
          max-width: 100%;
          border: none;
          display: block;
          background-color: #fff;
          box-sizing: border-box;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .responsive-iframe-wrapper {
            width: 100%;
            height: auto;
            min-height: 100vh;
          }
          
          .responsive-iframe-wrapper .iframe-container {
            width: 100%;
            height: 100vh;
            min-height: 100vh;
          }
          
          .responsive-iframe-wrapper iframe {
            width: 100%;
            height: 100vh;
            min-height: 100vh;
          }
        }
        
        @media (max-width: 480px) {
          .responsive-iframe-wrapper .iframe-container {
            height: 120vh;
            min-height: 120vh;
          }
          
          .responsive-iframe-wrapper iframe {
            height: 120vh;
            min-height: 120vh;
          }
        }
        
        /* Prevent horizontal scroll */
        .responsive-iframe-wrapper {
          overflow-x: hidden;
        }
      `}</style>
      <div
        ref={containerRef}
        className={`responsive-iframe-wrapper ${className}`}
        style={{
          width: "100%",
          maxWidth: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="iframe-container"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: isMobile ? "100vh" : "auto",
            minHeight: isMobile ? "100vh" : `${minHeight}px`,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <iframe
            ref={iframeRef}
            src={src}
            style={{
              width: "100%",
              maxWidth: "100%",
              minHeight: isMobile ? "100vh" : `${minHeight}px`,
              height: isMobile ? "100vh" : "100%",
              border: "none",
              display: "block",
              backgroundColor: "#fff",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation allow-popups-to-escape-sandbox"
            loading="lazy"
            scrolling="auto"
          />
        </div>
      </div>
    </>
  )
}
