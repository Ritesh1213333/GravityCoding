import React, { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import toast from 'react-hot-toast'
import { Trash2, CheckCircle, Clock, Search, Filter, MoreVertical } from 'lucide-react'

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchInquiries()
  }, [])

  const fetchInquiries = async () => {
    const token = localStorage.getItem('adminToken')
    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        headers: { 'Authorization': `Bearer ${token}` },
      })
      if (response.ok) {
        const data = await response.json()
        setInquiries(data)
      }
    } catch (error) {
      toast.error('Failed to fetch inquiries')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return
    const token = localStorage.getItem('adminToken')
    try {
      const response = await fetch(`http://localhost:5000/api/inquiries/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      })
      if (response.ok) {
        setInquiries(inquiries.filter((inq) => inq._id !== id))
        toast.success('Inquiry deleted')
      }
    } catch (error) {
      toast.error('Action failed')
    }
  }

  const handleStatusChange = async (id, status) => {
    const token = localStorage.getItem('adminToken')
    try {
      const response = await fetch(`http://localhost:5000/api/inquiries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      })
      if (response.ok) {
        const updated = await response.json()
        setInquiries(inquiries.map((inq) => inq._id === id ? updated : inq))
        toast.success(`Status updated to ${status}`)
      }
    } catch (error) {
      toast.error('Update failed')
    }
  }

  const filteredInquiries = inquiries.filter(inq => 
    inq.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <AdminLayout>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Inquiries Management</h1>
          <p className="text-white/40 text-sm">Review and manage student requests</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3">
            <Search size={18} className="text-white/20" />
            <input 
              type="text" 
              placeholder="Filter inquiries..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-white text-sm"
            />
          </div>
          <button className="bg-white/5 hover:bg-white/10 p-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/5">
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-white/30">Student Info</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-white/30">Subject / Course</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-white/30">Status</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-white/30 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-10 text-center text-white/20 italic">No inquiries match your filters.</td>
                </tr>
              ) : (
                filteredInquiries.map((inq) => (
                  <tr key={inq._id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-white font-bold border border-white/10">
                          {inq.fullName.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-bold">{inq.fullName}</p>
                          <p className="text-white/30 text-xs">{inq.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 font-medium text-white/80">
                      <div className="flex flex-col gap-1">
                        <span className="text-white">{inq.subject}</span>
                        {inq.courseName && <span className="text-[#497DFF] text-xs">{inq.courseName}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        inq.status === 'resolved' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                        inq.status === 'contacted' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' : 
                        'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                      }`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => handleStatusChange(inq._id, inq.status === 'resolved' ? 'pending' : 'resolved')}
                          className="p-2.5 bg-white/5 hover:bg-green-500/10 text-white/30 hover:text-green-500 rounded-xl transition-all"
                        >
                          <CheckCircle size={18} />
                        </button>
                        <button 
                          onClick={() => handleDelete(inq._id)}
                          className="p-2.5 bg-white/5 hover:bg-red-500/10 text-white/30 hover:text-red-500 rounded-xl transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                        <button className="p-2.5 bg-white/5 text-white/30 rounded-xl transition-all">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Inquiries
