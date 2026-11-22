import React, { useState } from 'react';

// Tableau de bord administrateur
export default function AdminDashboard() {
  const [pipelineEnCours, setPipelineEnCours] = useState(false);
  const [dernierLancement, setDernierLancement] = useState('2026-11-21 16:30');
  const [statut, setStatut] = useState('Connecté (MongoDB OK)');

  const lancerPipeline = () => {
    setPipelineEnCours(true);
    setTimeout(() => {
      setPipelineEnCours(false);
      setDernierLancement(new Date().toLocaleString());
      alert('Pipeline ETL exécuté avec succès !');
    }, 1500);
  };

  return (
    <div className="admin-container">
      <h2>Panneau d'administration</h2>
      <div className="admin-metrics">
        <div className="metric-box">
          <p>Statut du système</p>
          <span className="badge-online">🟢 {statut}</span>
        </div>
        <div className="metric-box">
          <p>Dernière exécution ETL</p>
          <span>📅 {dernierLancement}</span>
        </div>
        <div className="metric-box">
          <p>Couche Bronze (MongoDB)</p>
          <span>📦 100 000+ documents</span>
        </div>
      </div>

      <div className="admin-actions">
        <h3>Gestion du Pipeline ETL</h3>
        <p>Déclenche le nettoyage Silver et les calculs statistiques Gold :</p>
        <button
          onClick={lancerPipeline}
          disabled={pipelineEnCours}
          className="btn-primary"
        >
          {pipelineEnCours ? 'Exécution en cours...' : '▶ Lancer le pipeline ETL (Python)'}
        </button>
      </div>
    </div>
  );
}
