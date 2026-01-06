import React from "react";

const contactInfo = {
  location: "Amarillo, TX",
  phone: "806.654.2813",
  email: "jholt1008@gmail.com",
  linkedin: "https://www.linkedin.com/in/jody-holt-9b19b0256",
};

const summary = `Detail-oriented software developer skilled in building full-stack applications using React, TypeScript, Node/Express, SQL, and Docker. Experienced in designing responsive user interfaces, structuring maintainable front-end architectures, and developing reliable, modular APIs. Strong communicator with proven ability to solve problems quickly, learn new technologies efficiently, and deliver clean, scalable code across multiple projects.`;

const skills = [
  {
    category: "Front-End Development",
    items: ["React", "TypeScript", "Responsive UI/UX", "Component Architecture", "Entity Framework Core", "TailwindCSS"],
  },
  {
    category: "Back-End & APIs",
    items: ["Node.js", "Express.js", "RESTful API", "Authentication Flows", "Data Validation", "C#", ".NET Core"],
  },
  {
    category: "Database & Data Modeling",
    items: ["SQL", "PostgreSQL", "CRUD Operations", "Query Optimization", "Object-Oriented Analysis & Design"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker Compose", "Git/GitHub", "Software Migration", "Multi-Container Setups"],
  },
  {
    category: "Software Engineering",
    items: ["Clear Communication", "Modular Code Design", "Collaboration", "Rapid Learning", "Problem-Solving"],
  },
];

const accomplishments = [
  "Meta's Front-End Web Development and Data Engineering certificate programs",
  "Built responsive React applications featuring structured component trees & dynamic routing",
  "Designed SQL databases with optimal CRUD operations & well-structured queries",
  "Containerized full-stack apps with Docker Compose for optimal scaling, resolved network, environment, version control, and dependency issues",
  "Created reusable UI components and interactive features that improved consistency and flow, user-friendly animations and enticing UX",
];

const workHistory = [
  { title: "Sandwich Artist", company: "Subway", location: "Canyon, TX", dates: "2024–Present" },
  { title: "Head Lifeguard", company: "Johnson Park Youth Center", location: "Borger, TX", dates: "Seasonal 2022–2025" },
  { title: "Sacker/Grocery Stocker", company: "United Supermarkets", location: "Canyon, TX", dates: "2023–2024" },
];

const education = [
  { degree: "M.S. in Computer Information Systems and Business Analytics", school: "West Texas A&M University", date: "May 2027" },
  { degree: "B.S. in Computer Information Systems", school: "West Texas A&M University", date: "May 2026" },
];

export function Resume() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-10 text-center anim-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold font-title text-text mb-3">Resume</h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-text/70">
          <span>{contactInfo.location}</span>
          <span className="hidden sm:inline text-primary">•</span>
          <a href={`tel:${contactInfo.phone.replace(/\./g, "")}`} className="hover:text-primary anim-base">
            {contactInfo.phone}
          </a>
          <span className="hidden sm:inline text-primary">•</span>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-primary anim-base">
            {contactInfo.email}
          </a>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-10 anim-fade-in">
        <SectionTitle>Summary</SectionTitle>
        <p className="text-text/85 leading-relaxed">{summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-10 anim-fade-in">
        <SectionTitle>Skills & Strengths</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-xl border border-secondary bg-secondary/20 p-4 anim-base hover:border-primary/50"
            >
              <h4 className="font-semibold text-primary mb-2 font-title">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block rounded-full bg-secondary/60 px-3 py-1 text-xs text-text/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accomplishments */}
      <section className="mb-10 anim-fade-in">
        <SectionTitle>Professional Accomplishments</SectionTitle>
        <ul className="space-y-3">
          {accomplishments.map((item, i) => (
            <li key={i} className="flex gap-3 text-text/85">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Work History */}
      <section className="mb-10 anim-fade-in">
        <SectionTitle>Work History</SectionTitle>
        <div className="space-y-4">
          {workHistory.map((job, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border border-secondary bg-secondary/20 p-4 anim-base hover:border-primary/50"
            >
              <div>
                <h4 className="font-semibold text-text">{job.title}</h4>
                <p className="text-text/70 text-sm">
                  {job.company} — {job.location}
                </p>
              </div>
              <span className="mt-2 sm:mt-0 text-sm text-primary font-medium">{job.dates}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="anim-fade-in">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border border-secondary bg-secondary/20 p-4 anim-base hover:border-primary/50"
            >
              <div>
                <h4 className="font-semibold text-text">{edu.degree}</h4>
                <p className="text-text/70 text-sm">{edu.school}</p>
              </div>
              <span className="mt-2 sm:mt-0 text-sm text-primary font-medium">{edu.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-bold font-title text-text">{children}</h3>
      <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
    </div>
  );
}
