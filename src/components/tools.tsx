export function ToolsSection() {
  const tools = [
    { name: 'Asana', icon: '🎯' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'ClickUp', icon: '📊' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Airtable', icon: '📋' },
    { name: 'Slack', icon: '💬' },
    { name: 'Gemini', icon: '✨' },
    { name: 'Make', icon: '🔧' },
    { name: 'Microsoft', icon: '🪟' },
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Pipedrive', icon: '📈' },
    { name: 'lexoffice', icon: '📄' }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">Our Tools & Technologies</h3>
        <p className="text-lg text-foreground/70 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          We use these and other proven tools to realize efficient automation solutions.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              className="group p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-3 animate-slide-up cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-purple-600/0 group-hover:from-primary/10 group-hover:to-purple-600/10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 filter group-hover:drop-shadow-lg">
                  {tool.icon}
                </div>
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {tool.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
