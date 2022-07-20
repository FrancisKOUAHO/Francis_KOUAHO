import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './project';
import Accueil from './Accueil';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/project/:projectId" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
