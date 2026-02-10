export default function CorsProxyPage() {
  return (
    <html>
      <head>
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="frame-ancestors https://framer.com https://*.framer.com;" 
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <iframe
          src="/"
          style={{
            width: '100vw',
            height: '100vh',
            border: 'none'
          }}
        />
      </body>
    </html>
  );
}
