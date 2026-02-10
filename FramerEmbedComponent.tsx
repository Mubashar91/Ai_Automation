// @ts-nocheck
// This file is designed for Framer's code editor - ignore local TypeScript errors
import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect } from "react"

interface Props {
  url: string
  minHeight?: number
}

export default function EmbeddedSite({ url, minHeight = 800 }: Props) {
  const [iframeHeight, setIframeHeight] = useState(minHeight)

  useEffect(() => {
    const handleResize = () => {
      // Update iframe height based on content
      const iframe = document.querySelector("iframe") as HTMLIFrameElement
      if (iframe) {
        try {
          const contentHeight = iframe.contentWindow?.document.documentElement.scrollHeight || minHeight
          setIframeHeight(Math.max(contentHeight, minHeight))
        } catch (e) {
          setIframeHeight(minHeight)
        }
      }
    }

    const timer = setTimeout(handleResize, 500)
    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
    }
  }, [minHeight])

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <iframe
        src={url}
        style={{
          width: "100%",
          minHeight: `${minHeight}px`,
          height: "100%",
          border: "none",
          display: "block",
          backgroundColor: "#fff",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
        loading="lazy"
      />
    </div>
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
