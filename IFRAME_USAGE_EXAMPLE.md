# Responsive Iframe Usage Guide

## Problems Fixed
1. **Desktop layout "shown too small"** – On small screens the iframe was often a fixed width (e.g. 1200px), so the embedded site rendered desktop layout and appeared scaled down. We now force the embed container to viewport width on mobile so the iframe is narrow and the site shows its mobile layout at full size.
2. **Horizontal scrolling** – Replaced `100vw` misuse with proper `100%` / viewport-width handling so the iframe adapts without causing horizontal scroll.

## Solution
Updated components that:
1. Use `100%` instead of `100vw` to prevent horizontal scrolling
2. Properly scale for mobile devices
3. Adapt iframe height based on screen size
4. Include proper viewport handling

## Usage Options

### Option 1: Use the ResponsiveIframe Component (Recommended)

```tsx
import ResponsiveIframe from './src/components/ResponsiveIframe'

function MyComponent() {
  return (
    <ResponsiveIframe 
      src="https://ai-automation-two-mu.vercel.app/"
      minHeight={800}
    />
  )
}
```

### Option 2: Use Updated FramerEmbedComponent

If you're using Framer, the `FramerEmbedComponent.tsx` has been updated with responsive fixes.

### Option 3: Inline JSX (Fixed Version)

If you need to use inline JSX, here's the corrected version:

```tsx
<div style={{ 
  position: "relative", 
  width: "100%", 
  maxWidth: "100%",
  overflow: "hidden"
}}>
  <iframe
    src="https://ai-automation-two-mu.vercel.app/"
    style={{
      width: "100%",
      maxWidth: "100%",
      height: "100vh",
      border: 0,
      display: "block",
    }}
    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
  />
</div>

<style>{`
  @media (max-width: 768px) {
    iframe { 
      height: 100vh !important; 
    }
  }
  @media (max-width: 480px) {
    iframe { 
      height: 120vh !important; 
    }
  }
`}</style>
```

## Key Changes Made

1. **Framer embed (mobile)**  
   On viewport ≤768px the embed container uses `width: 100vw` and `left: 50%; transform: translateX(-50%)` so the iframe is the same width as the viewport. The embedded site then receives a small `innerWidth` and renders its **mobile layout** instead of a shrunken desktop layout.

2. **Embedded site (this repo)**  
   When the app runs inside an iframe it uses a higher “mobile” breakpoint (1024px instead of 768px), so header and other components switch to mobile layout in narrow iframes. `embed-mobile` / `embed-small` in `main.tsx` use the same iframe breakpoints.

3. **Container sizing**  
   Use `100%` where possible; reserve `100vw` for the mobile breakout so the iframe is viewport-wide. Add `overflow-x: hidden` on the Framer frame that contains the embed if you see horizontal scroll.

4. **Improved mobile height handling**  
   iframe height uses `100vh` on small screens for better fill.

## Framer setup

- Set the **frame** that contains the embed component to **Fill** (or 100% width) on the mobile breakpoint so the iframe can be as wide as the viewport.
- If you see horizontal scroll on the Framer page, enable **Clip content** or set `overflow-x: hidden` on that frame.

## Testing

Test on:
- Desktop (1920x1080)
- Tablet (768px width)
- Mobile (375px width)
- Small mobile (320px width)

The iframe should now properly adapt to each screen size without horizontal scrolling.
