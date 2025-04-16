import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from "./pages/HomePage";
import WorldPage from "./pages/WorldPage";
import PoliticsPage from "./pages/PoliticsPage";
import SportsPage from "./pages/SportsPage";
import EntertainmentPage from "./pages/EntertainmentPage";
import TechnologyPage from "./pages/TechnologyPage";
import TrendingPage from "./pages/TrendingPage";
import EditorialsPage from "./pages/EditorialsPage";
import ArchivesPage from "./pages/ArchivesPage";
import ArticlePage from "./pages/ArticlePage";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/world" element={<WorldPage />} />
        <Route path="/politics" element={<PoliticsPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/editorials" element={<EditorialsPage />} />
        <Route path="/archives" element={<ArchivesPage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
      </Routes>
    </Layout>
  );
};

export default App;