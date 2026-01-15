import { ReactNode } from "react";

interface TimelineEntry {
  organization: string;
  date: string;
  title: string;
  bullets: string[];
}

interface TimelineSectionProps {
  title: string;
  color: string;
  entries: TimelineEntry[];
}

const TimelineSection = ({ title, color, entries }: TimelineSectionProps) => {
  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-border" />
        <h2 
          className="section-header font-heading"
          style={{ color }}
        >
          {title}
        </h2>
        <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-border" />
      </div>
      
      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-muted to-border" />
        
        {/* Entries */}
        <div className="space-y-8">
          {entries.map((entry, index) => (
            <TimelineEntry 
              key={index} 
              entry={entry} 
              index={index} 
              color={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineEntryProps {
  entry: TimelineEntry;
  index: number;
  color: string;
}

const TimelineEntry = ({ entry, index, color }: TimelineEntryProps) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start">
      {/* Left Content - visible on md+ for even items */}
      <div className={`hidden md:block ${isLeft ? 'text-right' : ''}`}>
        {isLeft ? (
          <div className="inline-block text-right">
            <h3 className="font-heading font-semibold text-foreground">
              {entry.organization}
            </h3>
            <p className="text-sm text-muted-foreground">{entry.date}</p>
          </div>
        ) : (
          <div className="card-entry">
            <h4 className="font-heading font-semibold mb-2" style={{ color }}>
              {entry.title}
            </h4>
            {entry.bullets.length > 0 && (
              <ul className="space-y-1">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      
      {/* Center Node */}
      <div className="hidden md:flex relative items-center justify-center z-10">
        <div 
          className="w-3 h-3 rounded-full animate-pulse-glow"
          style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}50` }}
        />
      </div>
      
      {/* Right Content - visible on md+ */}
      <div className="hidden md:block">
        {isLeft ? (
          <div className="card-entry">
            <h4 className="font-heading font-semibold mb-2" style={{ color }}>
              {entry.title}
            </h4>
            {entry.bullets.length > 0 && (
              <ul className="space-y-1">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="text-left">
            <h3 className="font-heading font-semibold text-foreground">
              {entry.organization}
            </h3>
            <p className="text-sm text-muted-foreground">{entry.date}</p>
          </div>
        )}
      </div>
      
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center gap-3 mb-3">
          <div 
            className="w-3 h-3 rounded-full shrink-0"
            style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}50` }}
          />
          <div>
            <h3 className="font-heading font-semibold text-foreground text-sm">
              {entry.organization}
            </h3>
            <p className="text-xs text-muted-foreground">{entry.date}</p>
          </div>
        </div>
        <div className="card-entry ml-6">
          <h4 className="font-heading font-semibold mb-2 text-sm" style={{ color }}>
            {entry.title}
          </h4>
          {entry.bullets.length > 0 && (
            <ul className="space-y-1">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
