import { useState, useEffect } from 'react';
import { Users, Trophy, Swords } from 'lucide-react';
import api from '../api/axios';

const Dashboard = () => {
  const [stats, setStats] = useState({ players: 0, tournaments: 0, matches: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [playersRes, tournamentsRes, matchesRes] = await Promise.all([
          api.get('/players'),
          api.get('/tournaments'),
          api.get('/matches')
        ]);
        
        setStats({
          players: playersRes.data.length,
          tournaments: tournamentsRes.data.length,
          matches: matchesRes.data.length
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  const statCards = [
    { title: 'Total Players', value: stats.players, icon: <Users size={24} className="text-[#3b82f6]" />, color: 'border-[#3b82f6]/20 bg-[#3b82f6]/5' },
    { title: 'Active Tournaments', value: stats.tournaments, icon: <Trophy size={24} className="text-[#22c55e]" />, color: 'border-[#22c55e]/20 bg-[#22c55e]/5' },
    { title: 'Matches Played', value: stats.matches, icon: <Swords size={24} className="text-orange-500" />, color: 'border-orange-500/20 bg-orange-500/5' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <header>
        <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
        <p className="text-gray-400 mt-2">Overview of your esports organization</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className={`card ${stat.color} flex items-center justify-between`}>
            <div>
              <p className="text-sm font-medium text-gray-400 mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-white">
                {loading ? '...' : stat.value}
              </h3>
            </div>
            <div className="p-3 rounded-lg bg-[#1f2937]">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Recent Activity</h2>
          <div className="flex items-center justify-center h-48 text-gray-500">
            Activity feed coming soon
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Upcoming Matches</h2>
          <div className="flex items-center justify-center h-48 text-gray-500">
            No upcoming matches
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
