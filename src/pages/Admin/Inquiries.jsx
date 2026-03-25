import React, { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import toast from 'react-hot-toast'
import { Trash2, CheckCircle, Clock, Search, Filter, MoreVertical, X } from 'lucide-react'
import API_URL from '../../utils/url'


const Inquiries = () => {
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedInquiry, setSelectedInquiry] = useState(null)

  useEffect(() => {
    fetchInquiries()
  }, [])

  const fetchInquiries = async () => {
    const token = localStorage.getItem('adminToken')
    try {
      const response = await fetch(`${API_URL}/inquiries`, {
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
      const response = await fetch(`${API_URL}/inquiries/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      })

      if (response.ok) {
        setInquiries(inquiries.filter((inq) => inq._id !== id))
        toast.success('Inquiry deleted')
        setSelectedInquiry(null)
      }
    } catch (error) {
      toast.error('Action failed')
    }
  }

  const handleStatusChange = async (id, status) => {
    const token = localStorage.getItem('adminToken')
    try {
      const response = await fetch(`${API_URL}/inquiries/${id}`, {
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
        setSelectedInquiry(updated)
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

const InquiryModal = ({ inquiry, onClose, onStatusChange, onDelete }) => {
  if (!inquiry) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#497DFF] to-[#3269f5] flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-[#497DFF]/20">
                {inquiry.fullName?.charAt(0) || '?'}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white leading-tight">{inquiry.fullName}</h2>
                <p className="text-white/40 text-sm">{inquiry.email}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-xl text-white/30 hover:text-white transition-all bg-white/5 border border-white/5"
            >
              <X size={20} /> 
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Phone Number</p>
              <p className="text-white font-medium">{inquiry.phone || 'N/A'}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Course Interest</p>
              <p className="text-[#497DFF] font-medium">{inquiry.courseName || 'General Inquiry'}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Inquiry Date</p>
              <p className="text-white/60 font-medium">{new Date(inquiry.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Current Status</p>
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                inquiry.status === 'resolved' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                inquiry.status === 'contacted' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' : 
                'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
              }`}>
                {inquiry.status}
              </span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-3">Message Body</p>
            <p className="text-white/80 leading-relaxed text-sm whitespace-pre-wrap">{inquiry.message}</p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => onStatusChange(inquiry._id, inquiry.status === 'resolved' ? 'pending' : 'resolved')}
              className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                inquiry.status === 'resolved' 
                ? 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20' 
                : 'bg-green-500 text-white hover:brightness-110 shadow-lg shadow-green-500/20'
              }`}
            >
              <CheckCircle size={18} />
              {inquiry.status === 'resolved' ? 'Mark Pending' : 'Mark Resolved'}
            </button>
            <button 
              onClick={() => onDelete(inquiry._id)}
              className="p-3.5 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-xl transition-all border border-red-500/10"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
                  <tr 
                    key={inq._id} 
                    onClick={() => setSelectedInquiry(inq)}
                    className="hover:bg-white/[0.04] transition-all cursor-pointer group"
                  >
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
                        {inq.courseName && <span className="text-[#497DFF] text-xs font-semibold">{inq.courseName}</span>}
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
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(inq._id, inq.status === 'resolved' ? 'pending' : 'resolved');
                          }}
                          className="p-2.5 bg-white/5 hover:bg-green-500/10 text-white/30 hover:text-green-500 rounded-xl transition-all"
                        >
                          <CheckCircle size={18} />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(inq._id);
                          }}
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
      
      {/* Modal Overlay */}
      <InquiryModal 
        inquiry={selectedInquiry} 
        onClose={() => setSelectedInquiry(null)} 
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </AdminLayout>
  )
}


export default Inquiries
