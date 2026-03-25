import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Settings, 
  HelpCircle,
  ChevronRight
} from 'lucide-react'

const AdminSidebar = () => {
  const location = useLocation()

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: MessageSquare, label: 'Inquiries', path: '/admin/inquiries' },
    { icon: Users, label: 'Management', path: '/admin/users' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0d0d0d] border-r border-white/5 flex flex-col z-50">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#497DFF] to-[#3269f5] rounded-xl flex items-center justify-center shadow-lg shadow-[#497DFF]/20">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg leading-none">Gravity</h2>
            <p className="text-white/30 text-[10px] uppercase tracking-widest mt-1">Admin Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                isActive 
                ? 'bg-[#497DFF]/10 text-[#497DFF]' 
                : 'text-white/40 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={isActive ? 'text-[#497DFF]' : 'group-hover:text-white transition-colors'} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#497DFF] shadow-[0_0_10px_#497DFF]" />}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <HelpCircle size={16} className="text-white/50" />
            </div>
            <span className="text-xs font-semibold text-white/70">Support</span>
          </div>
          <p className="text-[10px] text-white/30 leading-relaxed mb-3">Need help with the admin panel? Check documentation.</p>
          <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold rounded-lg transition-all">
            Open Docs
          </button>
        </div>
      </div>
    </aside>
  )
}

export default AdminSidebar
