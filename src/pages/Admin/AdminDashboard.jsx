import React, { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { 
  Users, 
  MessageSquare, 
  Clock, 
  CheckCircle,
  TrendingUp,
  ArrowUpRight,
  UserPlus,
  ChevronRight
} from 'lucide-react'
import API_URL from '../../utils/url'


const AdminDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
    contacted: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('adminToken')
      try {
        const response = await fetch(`${API_URL}/inquiries`, {
          headers: { 'Authorization': `Bearer ${token}` },
        })

        if (response.ok) {
          const data = await response.json()
          if (Array.isArray(data)) {
            setStats({
              total: data.length,
              pending: data.filter(i => i.status === 'pending').length,
              resolved: data.filter(i => i.status === 'resolved').length,
              contacted: data.filter(i => i.status === 'contacted').length
            })
          }
        }
      } catch (error) {
        console.error('Failed to fetch stats')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const StatCard = ({ icon: Icon, label, value, color, trend }) => (
    <div className="bg-[#111] border border-white/5 rounded-3xl p-6 hover:border-[#497DFF]/20 transition-all duration-500 group relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-[0.03] rounded-bl-full transform translate-x-8 -translate-y-8`} />
      
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-2xl bg-${color.split('-')[1]}-500/10 text-${color.split('-')[1]}-500 group-hover:scale-110 transition-transform duration-500`}>
          <Icon size={24} />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-bold">
          <TrendingUp size={12} /> {trend}%
        </div>
      </div>
      
      <div>
        <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
        <h3 className="text-4xl font-black text-white">{value}</h3>
      </div>
    </div>
  )

  return (
    <AdminLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white mb-2">Welcome Back, Admin</h1>
        <p className="text-white/40 text-sm font-medium">Here's what's happening at Gravity Coding today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard 
          icon={Users} 
          label="Total Inquiries" 
          value={stats.total} 
          color="from-blue-500" 
          trend="+12" 
        />
        <StatCard 
          icon={Clock} 
          label="Pending Tasks" 
          value={stats.pending} 
          color="from-yellow-500" 
          trend="+3" 
        />
        <StatCard 
          icon={CheckCircle} 
          label="Resolved Cases" 
          value={stats.resolved} 
          color="from-green-500" 
          trend="+28" 
        />
        <StatCard 
          icon={MessageSquare} 
          label="Active Chats" 
          value={stats.contacted} 
          color="from-purple-500" 
          trend="+5" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#111] border border-white/5 rounded-[32px] p-8 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Growth Analytics</h2>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold font-mono">Platform performance this month</p>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold text-[#497DFF] hover:text-white transition-colors">
              View Report <ArrowUpRight size={14} />
            </button>
          </div>
          
          <div className="h-64 flex items-end gap-3 justify-between px-4">
            {[40, 70, 45, 90, 65, 80, 55, 100, 85, 95, 60, 75].map((h, i) => (
              <div key={i} className="flex-1 group/bar relative">
                <div 
                  className="w-full bg-gradient-to-t from-[#497DFF]/20 to-[#497DFF] rounded-t-lg transition-all duration-1000 origin-bottom hover:brightness-125"
                  style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                  {h}%
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 px-4 text-[10px] font-bold text-white/20 uppercase tracking-widest font-mono">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-[32px] p-8">
          <h2 className="text-2xl font-bold text-white mb-8">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <UserPlus size={20} />
                </div>
                <span className="text-sm font-bold text-white/80">Add New Admin</span>
              </div>
              <ChevronRight size={16} className="text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1" />
            </button>
            
            <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <span className="text-sm font-bold text-white/80">Export Data</span>
              </div>
              <ChevronRight size={16} className="text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-10 p-6 bg-gradient-to-br from-[#497DFF] to-[#3269f5] rounded-3xl relative overflow-hidden shadow-xl shadow-[#497DFF]/20">
             <div className="relative z-10">
               <h4 className="text-white font-black text-lg mb-2 leading-tight">Ready for more?</h4>
               <p className="text-white/70 text-xs mb-4 leading-relaxed">Upgrade your plan to unlock advanced analytics and automation tools.</p>
               <button className="px-6 py-2.5 bg-white text-[#497DFF] text-xs font-black rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg">
                 Upgrade Now
               </button>
             </div>
             <TrendingUp size={80} className="absolute -bottom-4 -right-4 text-white/10 transform -rotate-12" />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
