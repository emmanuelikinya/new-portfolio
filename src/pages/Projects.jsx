
import React from 'react';

export default function Projects() {
  return (
    <section className="projects" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ color: '#2e3a59', marginBottom: 24 }}>Projects</h2>
      <div className="project" style={{ background: '#f1f3f5', padding: 20, borderRadius: 10, marginBottom: 20 }}>
        <div className="project-title" style={{ color: '#00bcd4', fontWeight: 'bold', marginBottom: 8 }}>Sales Forecasting Model</div>
        <p>Developed a time-series model using Python to forecast monthly sales with 92% accuracy. Used pandas, Prophet, and matplotlib.</p>
      </div>
      <div className="project" style={{ background: '#f1f3f5', padding: 20, borderRadius: 10, marginBottom: 20 }}>
        <div className="project-title" style={{ color: '#00bcd4', fontWeight: 'bold', marginBottom: 8 }}>Customer Churn Analysis</div>
        <p>Created a classification model to predict churn in telecom data using scikit-learn and XGBoost. Achieved an F1-score of 0.87.</p>
      </div>
      <div className="project" style={{ background: '#f1f3f5', padding: 20, borderRadius: 10, marginBottom: 20 }}>
        <div className="project-title" style={{ color: '#00bcd4', fontWeight: 'bold', marginBottom: 8 }}>Kenya COVID-19 Data Dashboard</div>
        <p>Built an interactive dashboard in Tableau to visualize the spread and impact of COVID-19 across Kenyan counties.</p>
      </div>
    </section>
  );
}
