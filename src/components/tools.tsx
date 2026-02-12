export function ToolsSection() {
  const tools = [
    'Asana',
    'Zapier',
    'ClickUp',
    'GitHub',
    'Airtable',
    'Slack',
    'Gemini',
    'Make',
    'Microsoft',
    'OpenAI',
    'Pipedrive',
    'lexoffice',
    'Notion',
    'Trello',
    'Monday.com',
    'HubSpot',
    'Salesforce',
    'Jira',
    'Google Workspace',
    'Dropbox',
    'Zoom',
    'Stripe',
    'Mailchimp',
    'Shopify'
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-5xl md:text-5xl font-bold mb-6 animate-fade-in tracking-tight">
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Our Tools & Technologies
          </span>
        </h3>
        <p className="text-xl md:text-lg text-foreground/70 mb-16 animate-slide-up font-light max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
          We use these and other proven tools to realize efficient automation solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              className="group p-6 bg-card rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 animate-slide-up cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/0 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 flex items-center justify-center h-full">
                <p className="text-lg md:text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {tool}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
