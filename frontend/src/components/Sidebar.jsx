import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Trophy, Swords, UserPlus } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/players', icon: <Users size={20} />, label: 'Players' },
    { path: '/tournaments', icon: <Trophy size={20} />, label: 'Tournaments' },
    { path: '/matches', icon: <Swords size={20} />, label: 'Matches' },
    { path: '/register', icon: <UserPlus size={20} />, label: 'Register' },
  ];

  return (
    <div className="h-full w-64 bg-[#111827] border-r border-gray-800 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="text-[#3b82f6]" />
          <span>Esports Hub</span>
        </h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-[#1f2937] text-white border-l-4 border-[#3b82f6]'
                  : 'text-gray-400 hover:bg-[#1f2937] hover:text-white'
              }`}
            >
              <span className={`${isActive ? 'text-[#3b82f6]' : ''}`}>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="text-xs text-gray-500 text-center">
          &copy; 2026 Esports Management
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
