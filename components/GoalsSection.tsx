"use client";
import React, { useState, useEffect } from 'react';
import './GoalsSection.css';

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  unit: string;
  category: 'technical' | 'career' | 'personal';
  icon: string;
}

const GoalsSection: React.FC = () => {
  const [animatedProgress, setAnimatedProgress] = useState<{ [key: string]: number }>({});

  const goals: Goal[] = [
    {
      id: 'get-gpu',
      title: 'Get a GPU',
      description: 'get my own graphics card',
      progress: 0,
      target: 1,
      unit: 'gpus',
      category: 'personal',
      icon: 'fas fa-microchip'
    },
    {
      id: 'code-cc',
      title: 'Co op craze',
      description: 'Start on a rework of the game',
      progress: 0,
      target: 100,
      unit: '%',
      category: 'technical',
      icon: 'fas fa-gamepad'
    },
    {
      id: 'screen',
      title: 'Get a 1080p screen',
      description: 'Getting a higher quality screen can be helpful',
      progress: 0,
      target: 1,
      unit: 'screens',
      category: 'personal',
      icon: 'fab fa-display'
    },
    {
      id: 'mobile-app',
      title: 'Make a mobile app',
      description: 'Making a production ready mobile app can show what i\'m truly capable of',
      progress: 0,
      target: 100,
      unit: '%',
      category: 'technical',
      icon: 'fas fa-phone'
    },
    {
      id: 'headphones',
      title: 'Get good headphones',
      description: 'Headphones give a feel of privacy and help with focus',
      progress: 0,
      target: 1,
      unit: 'headphones',
      category: 'personal',
      icon: 'fas fa-headphones'
    },
    {
      id: 'learning-streak',
      title: 'Learning',
      description: 'Learning rust until i\'m better than ayman',
      progress: 4,
      target: 365,
      unit: 'days',
      category: 'personal',
      icon: 'fas fa-rust'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const goalId = entry.target.getAttribute('data-goal-id');
            const goal = goals.find(g => g.id === goalId);
            if (goal && goalId && !animatedProgress[goalId]) {
              animateProgress(goalId, goal.progress);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const goalElements = document.querySelectorAll('.goal-card');
    goalElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateProgress = (goalId: string, targetProgress: number) => {
    let current = 0;
    const increment = targetProgress / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetProgress) {
        current = targetProgress;
        clearInterval(timer);
      }
      setAnimatedProgress(prev => ({ ...prev, [goalId]: current }));
    }, 20);
  };

  const getProgressPercentage = (goal: Goal) => {
    return (goal.progress / goal.target) * 100;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical': return 'var(--primary-color)';
      case 'career': return 'var(--secondary-color)';
      case 'personal': return '#f59e0b';
      default: return 'var(--primary-color)';
    }
  };

  return (
    <section id="goals" className="goals">
      <div className="container">
        <h2 className="section-title">Goals</h2>
        <p className="goals-subtitle">
          Stuff i don't even think can be done this year
        </p>
        
        <div className="goals-grid">
          {goals.map((goal) => {
            const progressPercentage = getProgressPercentage(goal);
            const animatedValue = animatedProgress[goal.id] || 0;
            const animatedPercentage = (animatedValue / goal.target) * 100;
            
            return (
              <div 
                key={goal.id} 
                className="goal-card"
                data-goal-id={goal.id}
                style={{ '--category-color': getCategoryColor(goal.category) } as React.CSSProperties}
              >
                <div className="goal-header">
                  <div className="goal-icon">
                    <i className={goal.icon}></i>
                  </div>
                  <div className="goal-category">
                    {goal.category}
                  </div>
                </div>
                
                <h3 className="goal-title">{goal.title}</h3>
                <p className="goal-description">{goal.description}</p>
                
                <div className="goal-progress">
                  <div className="progress-header">
                    <span className="progress-label">Progress</span>
                    <span className="progress-value">
                      {Math.round(animatedValue)}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${Math.min(animatedPercentage, 100)}%`,
                        backgroundColor: getCategoryColor(goal.category)
                      }}
                    ></div>
                  </div>
                  
                  <div className="progress-percentage">
                    {Math.round(progressPercentage)}% Complete
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="goals-support">
          <div className="support-content">
            <h3 className="support-title">Donate</h3>
            <p className="support-description">
              TODO: put some motivative speech here
            </p>
            <a 
              href="https://paypal.me/skyopg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donate-button"
            >
              <i className="fab fa-paypal"></i>
              <span>Donate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;