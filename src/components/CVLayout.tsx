import HeroSection from "./HeroSection";
import TimelineSection from "./TimelineSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";

const educationEntries = [
  {
    organization: "University of Oregon",
    date: "09/2023 – 06/2027",
    title: "B.S. Computer Science",
    bullets: [
      "Dean's List",
      "Leet Club Member",
      "CS FIG Participant"
    ]
  },
  {
    organization: "Sunset High School",
    date: "09/2019 – 06/2023",
    title: "High School Diploma",
    bullets: [
      "Computer Science Pathway",
      "Business Pathway",
      "State of Oregon's Seal of Biliteracy",
      "Sunset Varsity Tennis Team",
      "OET Tennis"
    ]
  }
];

const experienceEntries = [
  {
    organization: "Darwoft",
    date: "07/2025 – 09/2025",
    title: "Full Stack Developer Intern",
    bullets: [
      "Worked in a Scrum team as a full-stack developer to build apps from the ground up.",
      "Built and deployed a custom AI chatbot for a museum, integrating it with existing content systems to answer visitor questions and surface exhibit info.",
      "Designed and implemented a custom web interface with a responsive, accessible UI, improving page performance and usability.",
      "Automated workflows in n8n to connect the app with external services.",
      "Participated in daily Agile/Scrum meetings to communicate progress updates and coordinate development goals.",
      "Resolved issues quickly by troubleshooting problems reported by users."
    ]
  },
  {
    organization: "USTA PNW",
    date: "06/2024 – 08/2024",
    title: "Tennis Coach",
    bullets: [
      "Managed engaging daily lesson plans for young tennis players",
      "Supervised students throughout the day, ensuring safe and structured environment",
      "Maintained effective communication with parents and staff"
    ]
  },
  {
    organization: "Portland Tennis & Education",
    date: "07/2023 – 09/2023",
    title: "Summer Volunteering",
    bullets: [
      "Helped manage young tennis players"
    ]
  },
  {
    organization: "Tech.Nico Solutions",
    date: "10/2021 – 04/2024",
    title: "Founder",
    bullets: [
      "Specialized in making homes smarter and offered consulting around crypto", 
      "Provided smart-home automation consulting and installations.",
      "Built custom IoT, automation, and crypto-mining solutions.",
      "Managed customer communication, project planning, and delivery.",
      "Utilized CAD software to design custom 3D-printed components, solving specific hardware integration challenges for client project",
      "Offered general IT troubleshooting and technical support",
      "Documented technical procedures to ensure long-term maintenance and client self-sufficiency.",
      "Provisioned Linux servers and managed virtual environments.",
      "Managed project budgets, invoicing, and hardware procurement for all client engagements."
    ]
  }
];

const awardEntries = [
  {
    organization: "University of Oregon",
    date: "2023 – 2027",
    title: "Dean's List",
    bullets: [
      "Ended term with a GPA of 3.75 or higher x 1 term",
      "Received recognition from the University of Oregon"
    ]
  },
  {
    organization: "Sunset High School",
    date: "2019 – 2023",
    title: "Business Pathway",
    bullets: [
      "Followed the Business Pathway throughout high school",
      "Took classes: Introduction to Business, Marketing, Accounting"
    ]
  },
  {
    organization: "Sunset High School",
    date: "2019 – 2023",
    title: "Computer Science Pathway",
    bullets: [
      "Followed the Computer Science Pathway during high school",
      "Took classes: Game Design, Computer Hardware, Java Programming"
    ]
  },
  {
    organization: "First Lego League",
    date: "09/2016 – 12/2016",
    title: "First Place Robot Design Award",
    bullets: [
      "Issued by First Lego League Portland Metro Area · Dec 2016"
    ]
  }
];

const CVLayout = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      
      <div className="container max-w-5xl mx-auto">
        <TimelineSection 
          title="EDUCATION" 
          color="hsl(199, 89%, 48%)" 
          entries={educationEntries}
        />
        
        <TimelineSection 
          title="WORK EXPERIENCE" 
          color="hsl(142, 71%, 45%)" 
          entries={experienceEntries}
        />
        
        <SkillsSection />
        
        <TimelineSection 
          title="AWARDS" 
          color="hsl(339, 82%, 51%)" 
          entries={awardEntries}
        />
        
        <ProjectsSection />
      </div>
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/50 mt-12">
        <p>© {new Date().getFullYear()} Nicolas Cilia. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default CVLayout;
