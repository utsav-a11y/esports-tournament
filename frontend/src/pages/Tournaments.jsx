import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Trophy, Calendar } from 'lucide-react';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await api.get('/tournaments');
        setTournaments(response.data);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTournaments();
  }, []);

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Tournaments</h1>
          <p className="text-gray-400 mt-2">View and manage all esports tournaments</p>
        </div>
      </header>

      {loading ? (
        <div className="card text-center text-gray-400 py-12">Loading tournaments...</div>
      ) : tournaments.length === 0 ? (
        <div className="card text-center text-gray-400 py-12">No tournaments found in database.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="card hover:border-[#3b82f6]/50 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#1f2937] rounded-lg text-[#3b82f6] group-hover:bg-[#3b82f6]/10 transition-colors">
                  <Trophy size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20">
                  {tournament.status || 'Active'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{tournament.name}</h3>
              <p className="text-[#3b82f6] font-medium mb-4">{tournament.game}</p>
              
              <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-800 pt-4 mt-4">
                <Calendar size={16} />
                <span>
                  {tournament.startDate ? new Date(tournament.startDate).toLocaleDateString() : 'TBA'} 
                  &nbsp;-&nbsp; 
                  {tournament.endDate ? new Date(tournament.endDate).toLocaleDateString() : 'TBA'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tournaments;
