interface Project {
  title: string;
  association: string;
  description: string;
  skills: string[];
}

const projects: Project[] = [
  {
    title: "Conversational Automation System for WhatsApp",
    association: "Darwoft",
    description: "Designed and deployed an automated workflow that connected a custom AI chatbot to WhatsApp using n8n and Meta/Facebook APIs. This integration enabled real-time access to exhibit information, FAQs, and visitor support directly through WhatsApp. Built dynamic logic that allowed the bot to respond in audio or text based on the user's input format and implemented interactive features—such as simulated typing indicators—to create a more natural and engaging conversational experience.",
    skills: ["n8n", "Troubleshooting", "Facebook API", "API Testing"]
  },
  {
    title: "Dynamic QR-Based Landing Page System",
    association: "Darwoft",
    description: "Developed a dynamic web page system for the Emilio Caraffa Museum that displayed artwork information based on numeric identifiers embedded in QR codes. When visitors scanned a code beside an artwork, the system used the identifier to retrieve the corresponding record from a structured database and automatically populate the page with the artwork's images, details, and historical context.",
    skills: ["Web Development", "Database Design", "Mobile Optimization"]
  },
  {
    title: "QR Code & NFC Generation Dashboard",
    association: "Darwoft",
    description: "Developed a QR code generation and tracking system that enabled customers to generate unique QR codes, track their usage, and manage them via a centralized dashboard. Implemented features such as configurable scan limits, IP-based scan tracking, and real-time analytics to monitor code activity.",
    skills: ["Dashboard Development", "Analytics", "QR Generation"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-bold text-foreground tracking-wider mb-8 flex items-center gap-3">
        <span className="w-3 h-3 bg-accent rounded-full"></span>
        PROJECTS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 flex flex-col"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              {project.association}
            </span>
            <h3 className="text-lg font-semibold text-foreground leading-tight mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>
            
            <div className="mt-auto pt-4 border-t border-border/30">
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
