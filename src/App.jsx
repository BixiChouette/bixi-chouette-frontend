import React, { useState } from 'react';
import KpiCards from './components/KpiCards';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  const [ongletActif, setOngletActif] = useState('utilisateur');

  return (
    <div className="app-layout">
      <header className="navbar">
        <div className="logo-section">
          <h1>🚲 BixiChouette</h1>
          <span className="subtitle">Collecte & Analyse des données BIXI Montréal</span>
        </div>
        <nav className="nav-tabs">
          <button
            className={ongletActif === 'utilisateur' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setOngletActif('utilisateur')}
          >
            Tableau de Bord Utilisateur
          </button>
          <button
            className={ongletActif === 'admin' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setOngletActif('admin')}
          >
            Tableau de Bord Admin
          </button>
        </nav>
      </header>

      <main className="content-container">
        {ongletActif === 'utilisateur' ? (
          <section className="user-section">
            <h2>Statistiques globales (Couche Gold)</h2>
            <KpiCards />
            <div className="placeholder-chart-card">
              <h3>Tendances d'utilisation</h3>
              <p>Visualisation des flux de vélos et des heures de pointe (Données agrégées Gold).</p>
            </div>
          </section>
        ) : (
          <section className="admin-section">
            <AdminDashboard />
          </section>
        )}
      </main>

      <footer className="footer">
        <p>Projet BixiChouette - Épreuve finale Collecte de Données - Automne 2026</p>
      </footer>
    </div>
  );
}

export default App;
