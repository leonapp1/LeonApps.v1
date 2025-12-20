import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/templates/MainLayout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { ServiceDetail } from './pages/ServiceDetail';
import { Plans } from './pages/Plans';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

/**
 * App Component
 * Main application component that handles routing.
 * Uses React Router for navigation between different pages.
 */
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* Projects Routes */}
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/:id" element={<ProjectDetail />} />
          
          {/* Service Detail Route (Services list page removed) */}
          <Route path="/servicios/:id" element={<ServiceDetail />} />
          
          {/* Other Pages */}
          <Route path="/planes" element={<Plans />} />
          <Route path="/contacto" element={<Contact />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
