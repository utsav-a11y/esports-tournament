import { useState } from 'react';
import api from '../api/axios';
import { UserPlus, Save } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'Player'
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await api.post('/players', formData);
      setStatus({ type: 'success', message: 'Player registered successfully!' });
      setFormData({ username: '', email: '', role: 'Player' }); // reset
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Failed to register player. Is the backend running?' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <UserPlus className="text-[#3b82f6]" /> Registration
        </h1>
        <p className="text-gray-400 mt-2">Register new players into the database</p>
      </header>

      <div className="card">
        {status.message && (
          <div className={`p-4 mb-6 rounded-lg border ${
            status.type === 'success' 
              ? 'bg-[#22c55e]/10 border-[#22c55e]/30 text-[#22c55e]' 
              : 'bg-red-500/10 border-red-500/30 text-red-500'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">In-Game Username</label>
            <input 
              type="text" 
              id="username" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input-field" 
              placeholder="e.g. Faker, s1mple" 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field" 
              placeholder="player@example.com" 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-300">Role</label>
            <select 
              id="role" 
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="input-field bg-[#1f2937]"
            >
              <option value="Player">Player</option>
              <option value="Captain">Team Captain</option>
              <option value="Coach">Coach</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
          >
            {isSubmitting ? 'Registering...' : <><Save size={18} /> Register Player</>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
