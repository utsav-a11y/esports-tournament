import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Players from './pages/Players';
import Tournaments from './pages/Tournaments';
import Matches from './pages/Matches';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#0f172a] overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#0f172a] p-8">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/players" element={<Players />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
