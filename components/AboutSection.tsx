import React from 'react';

interface SkillGroup {
  category: string;
  items: string[];
}

const AboutSection: React.FC = () => {
  const skills: SkillGroup[] = [
    {
      category: "Languages & Technologies",
      items: ["Modern C++23", "JavaScript/TypeScript", "Node.js", "x86 Assembly (16/32-bit)", "REST APIs", "System Programming"]
    },
    {
      category: "Specialties",
      items: ["High-performance Applications", "Operating Systems", "Backend Development", "Low-level Optimization", "Problem Solving"]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              With over <span className="highlight">6 years of experience</span> in backend development, 
              I specialize in creating awesome (but sometimes dumb), high-performance applications 
              and operating systems.
            </p>
            <p>
              My passion lies in <span className="highlight">solving problems nobody cares about</span> and 
              building crazy projects that I surely can't maintain alone (yet I do it, somehow).
            </p>
            <p>
              From high-level APIs in JavaScript/TypeScript to getting as low-level as Assembly 
              for the best optimizations, I enjoy pushing the boundaries of what's possible.
            </p>
          </div>
          
          <div className="skills">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;