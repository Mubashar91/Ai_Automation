import { addPropertyControls, ControlType } from "framer"

export default function SiteLink({ url, buttonText }) {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "12px",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <div style={{
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "20px",
      }}>
        {buttonText} →
      </div>
    </div>
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
