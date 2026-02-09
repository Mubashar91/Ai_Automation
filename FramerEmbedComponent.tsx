// @ts-nocheck
// This file is designed for Framer's code editor - ignore local TypeScript errors
import { addPropertyControls, ControlType } from "framer"

interface Props {
  url: string
}

export default function EmbeddedSite({ url }: Props) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <iframe
        src={url}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
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
})
