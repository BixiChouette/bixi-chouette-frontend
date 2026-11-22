import React from 'react';

// Affichage des 3 indicateurs clés (KPI)
export default function KpiCards({ stats }) {
  const defaultStats = {
    totalTrajets: stats?.totalTrajets || '100 000+',
    dureeMoyenne: stats?.dureeMoyenne || '14.2 min',
    topArrondissement: stats?.topArrondissement || 'Ville-Marie',
  };

  return (
    <div className="kpi-container">
      <div className="kpi-card">
        <span className="kpi-icon">🚲</span>
        <div className="kpi-info">
          <p className="kpi-title">Total des trajets</p>
          <h3 className="kpi-value">{defaultStats.totalTrajets}</h3>
        </div>
      </div>

      <div className="kpi-card">
        <span className="kpi-icon">⏱️</span>
        <div className="kpi-info">
          <p className="kpi-title">Durée moyenne</p>
          <h3 className="kpi-value">{defaultStats.dureeMoyenne}</h3>
        </div>
      </div>

      <div className="kpi-card">
        <span className="kpi-icon">📍</span>
        <div className="kpi-info">
          <p className="kpi-title">Secteur le plus actif</p>
          <h3 className="kpi-value">{defaultStats.topArrondissement}</h3>
        </div>
      </div>
    </div>
  );
}
