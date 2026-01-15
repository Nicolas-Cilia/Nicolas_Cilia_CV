interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Computer Languages",
    skills: ["Java", "JavaScript", "Python", "C", "TypeScript", "CSS", "HTML"]
  },
  {
    name: "Skills & Tools",
    skills: [
      "Bilingual (Spanish & English)",
      "Teamwork",
      "Time Management",
      "Team Leadership",
      "AI & LLMs",
      "Storybook",
      "n8n",
      "Databases",
      "React",
      "Azure DevOps",
      "META Services"
    ]
  }
];

const SkillsSection = () => {
  const color = "hsl(45, 93%, 47%)"; // Yellow/Gold
  
  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-border" />
        <h2 
          className="section-header font-heading"
          style={{ color }}
        >
          SKILLS
        </h2>
        <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-border" />
      </div>
      
      {/* Skills Grid */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-entry">
              <h3 
                className="font-heading font-semibold text-sm mb-4 tracking-wider uppercase"
                style={{ color }}
              >
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
