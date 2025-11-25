import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-code">
          <div className="code-line">Developer* sky = new Developer();</div>
          <div className="code-line">sky{"->"}passion = "solving problems nobody cares about";</div>
          <div className="code-line">sky{"->"}specialty = "building crazy projects";</div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Hi, I'm</span>
            <span className="title-name">Mohammed Amine Maazioui</span>
            <span className="title-alias">aka Sky</span>
          </h1>
          <p className="hero-subtitle">Backend Developer</p>
          <p className="hero-description">
            Living life on the edge&trade;
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              My Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="window-title">sky.cpp</div>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="keyword">#include</span> <span className="string">&lt;print&gt;</span></div>
              <div className="code-line"><span className="keyword">#include</span> <span className="string">&lt;Puffy/Developer.hpp&gt;</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="type">int</span> <span className="function">main</span>() {"{"}</div>
              <div className="code-line">  <span className="class">Developer</span> sky;</div>
              <div className="code-line">{"\t"}sky{"->"}<span className="function">specialize</span>(<span className="string">"C++"</span>, <span className="string">"TypeScript"</span>, <span className="string">"Assembly"</span>);</div>
              <div className="code-line">{"\t"}sky{"->"}<span className="function">build</span>(<span className="string"></span>);</div>
              <div className="code-line">{"\t"}<span className="keyword">return</span> <span className="number">0</span>;</div>
              <div className="code-line">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
