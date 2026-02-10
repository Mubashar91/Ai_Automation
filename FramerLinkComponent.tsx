// @ts-nocheck
// This file is designed for Framer's code editor - ignore local TypeScript errors
import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

interface Props {
  url: string
  buttonText: string
}

export default function SiteLink({ url, buttonText }: Props) {
  return (
    <motion.div
      onClick={() => window.open(url, "_blank")}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        borderRadius: "16px",
        boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div style={{
        color: "white",
        fontSize: "28px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "30px",
        zIndex: 1,
        textShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}>
        {buttonText} →
      </div>
    </motion.div>
  )
}

addPropertyControls(SiteLink, {
  url: {
    type: ControlType.String,
    title: "Website URL",
    defaultValue: "https://your-site.com",
  },
  buttonText: {
    type: ControlType.String,
    title: "Button Text",
    defaultValue: "Visit Our Website",
  },
})
