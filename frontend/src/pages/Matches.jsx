import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Swords } from 'lucide-react';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await api.get('/matches');
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMatches();
  }, []);

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Matches</h1>
          <p className="text-gray-400 mt-2">Live and upcoming esports matches</p>
        </div>
      </header>

      <div className="card p-0 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-400">Loading matches...</div>
        ) : matches.length === 0 ? (
          <div className="p-8 text-center text-gray-400">No matches found in database.</div>
        ) : (
          <div className="divide-y divide-gray-800">
            {matches.map((match) => (
              <div key={match.id} className="p-6 hover:bg-[#1f2937]/30 transition-colors flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-right">
                  <h3 className="text-xl font-bold text-white">{match.team1?.name || 'TBD'}</h3>
                </div>
                
                <div className="flex flex-col items-center justify-center px-8">
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-widest">{match.tournament?.name || 'Tournament'}</div>
                  <div className="w-12 h-12 rounded-full bg-[#1f2937] flex items-center justify-center text-orange-500 border border-gray-700">
                    <Swords size={20} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-400">
                    {match.matchTime ? new Date(match.matchTime).toLocaleString() : 'TBA'}
                  </div>
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-white">{match.team2?.name || 'TBD'}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
