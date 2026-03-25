import React from 'react'
import { Bell, Search, LogOut, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const AdminTopbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin')
    toast.success('Logged out successfully')
  }

  return (
    <header className="h-20 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40 px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-full px-4 py-2 w-96">
        <Search size={18} className="text-white/30" />
        <input 
          type="text" 
          placeholder="Search inquiries, students..." 
          className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/20 w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2.5 bg-white/5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0a0a0a]" />
        </button>

        <div className="h-10 w-[1px] bg-white/10 mx-2" />

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-white leading-none">Admin User</p>
            <p className="text-[10px] text-[#497DFF] font-medium mt-1 uppercase tracking-wider">Super Admin</p>
          </div>
          <div className="relative group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#497DFF] to-[#3269f5] flex items-center justify-center font-bold text-white shadow-lg cursor-pointer transition-transform active:scale-95">
              AD
            </div>
            
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#111] border border-white/10 rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm leading-none">
                <User size={16} /> Profile Settings
              </button>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-500/60 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all text-sm leading-none"
              >
                <LogOut size={16} /> Logout System
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminTopbar
