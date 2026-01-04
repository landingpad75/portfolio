import React from 'react';

interface SkillGroup {
  category: string;
  items: string[];
}

const AboutSection: React.FC = () => {
  const skills: SkillGroup[] = [
    {
      category: "Languages & Technologies",
      items: ["Modern C++", "JavaScript/TypeScript", "x86 Assembly (16/32-bit)"]
    },
    {
      category: "Specialties",
      items: ["Applications", "Operating Systems", "Backend Development", "Problem Creation"]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              With over <span className="highlight">6 years of experience</span> in C++ backend development, 
              I work on some interesting pieces of software that would most likely never see the light of day.
            </p>
            <p>
              My passion lies in <span className="highlight">solving problems nobody cares about</span> and 
              building random impossible projects for a solo dev.
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