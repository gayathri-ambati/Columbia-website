// src/routes/dashboard/submissions.tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  Mail,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  Reply,
  X,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  User,
  Building2,
  Phone,
  MessageSquare,
  Calendar,
  Loader2,
  AlertCircle,
  RefreshCw,
  Server,
  Database,
  Flag,
  UserCheck,
  Globe,
  Monitor,
  Tag,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/submissions")({
  head: () => ({
    meta: [
      { title: "Contact Submissions —  Columbia" },
      {
        name: "description",
        content: "Manage contact form submissions from your website.",
      },
    ],
  }),
  component: SubmissionsPage,
});

interface Submission {
  id: number;
  full_name: string;
  company: string | null;
  email: string;
  phone: string | null;
  project_type: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'pending';
  priority: 'low' | 'medium' | 'high' | 'urgent' | null;
  assigned_to: string | null;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
  updated_at: string;
}

function SubmissionsPage() {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [updating, setUpdating] = useState(false);
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  // Check server status and authentication
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    console.log("🔐 Auth check - Token:", token ? "Present" : "Missing");
    console.log("🔐 Auth check - User:", user ? "Present" : "Missing");
    
    if (!token || !user) {
      console.log("❌ No token or user found, redirecting to login");
      navigate({ to: "/login" });
      return;
    }

    // Check server health first
    checkServerHealth();
  }, []);

  const checkServerHealth = async () => {
    try {
      setServerStatus('checking');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/health`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        console.log('✅ Server is online');
        setServerStatus('online');
        fetchSubmissions();
      } else {
        console.log('❌ Server is offline');
        setServerStatus('offline');
        setError('Server is offline. Please make sure the backend is running.');
        setLoading(false);
      }
    } catch (error) {
      console.log('❌ Server is offline - Connection refused');
      setServerStatus('offline');
      setError('Cannot connect to the server. Please make sure the backend is running on port 5000.');
      setLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      console.log("📤 Fetching submissions with token:", token ? "Present" : "Missing");
      console.log("🔗 API URL:", API_URL);
      
      const response = await fetch(`${API_URL}/api/admin/submissions`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log("📥 Response status:", response.status);

      if (response.status === 401) {
        console.log("❌ Unauthorized - Token expired or invalid");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
        setError('Session expired. Please login again.');
        setTimeout(() => {
          navigate({ to: "/login" });
        }, 2000);
        return;
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Error response:", errorText);
        throw new Error(`Failed to fetch submissions: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Submissions fetched:", data);
      
      if (data.submissions && data.submissions.length > 0) {
        setSubmissions(data.submissions);
      } else {
        setSubmissions([]);
        setError('No submissions found. Submit a contact form to see data here.');
      }
    } catch (err) {
      console.error("❌ Error fetching submissions:", err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      if (serverStatus === 'offline') {
        console.log('📝 Server offline - using demo data for testing');
        setSubmissions(getDemoData());
      }
    } finally {
      setLoading(false);
    }
  };

  const getDemoData = (): Submission[] => {
    return [
      {
        id: 1,
        full_name: "Rajesh",
        company: "iiiqbets",
        email: "rajeshyanamadala2000@gmail.com",
        phone: "9346843156",
        project_type: "PEB Building",
        message: "hiii",
        status: "new",
        priority: "medium",
        assigned_to: null,
        ip_address: null,
        user_agent: null,
        created_at: new Date(Date.now() - 3600000).toISOString(),
        updated_at: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: 2,
        full_name: "Rajesh",
        company: "Hyderabad",
        email: "admin@gmail.com",
        phone: "9346030303",
        project_type: "Industrial Shed",
        message: "jju",
        status: "new",
        priority: "medium",
        assigned_to: null,
        ip_address: null,
        user_agent: null,
        created_at: new Date(Date.now() - 7200000).toISOString(),
        updated_at: new Date(Date.now() - 7200000).toISOString(),
      },
    ];
  };

  const updateStatus = async (id: number, status: 'new' | 'read' | 'replied' | 'pending') => {
    try {
      setUpdating(true);
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/admin/submissions/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      setSubmissions(prev => 
        prev.map(sub => 
          sub.id === id ? { ...sub, status } : sub
        )
      );
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status });
      }
    } catch (err) {
      console.error("Error updating status:", err);
      alert('Failed to update status');
    } finally {
      setUpdating(false);
    }
  };

  const updatePriority = async (id: number, priority: 'low' | 'medium' | 'high' | 'urgent') => {
    try {
      setUpdating(true);
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/admin/submissions/${id}/priority`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ priority }),
      });

      if (!response.ok) {
        throw new Error('Failed to update priority');
      }

      setSubmissions(prev => 
        prev.map(sub => 
          sub.id === id ? { ...sub, priority } : sub
        )
      );
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({ ...selectedSubmission, priority });
      }
    } catch (err) {
      console.error("Error updating priority:", err);
      alert('Failed to update priority');
    } finally {
      setUpdating(false);
    }
  };

  const deleteSubmission = async (id: number) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    try {
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/admin/submissions/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete submission');
      }

      setSubmissions(prev => prev.filter(sub => sub.id !== id));
      if (selectedSubmission && selectedSubmission.id === id) {
        setIsModalOpen(false);
        setSelectedSubmission(null);
      }
    } catch (err) {
      console.error("Error deleting submission:", err);
      alert('Failed to delete submission');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700"><Tag className="w-3 h-3" /> New</span>;
      case 'pending':
        return <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700"><Clock className="w-3 h-3" /> Pending</span>;
      case 'read':
        return <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-700"><CheckCircle className="w-3 h-3" /> Read</span>;
      case 'replied':
        return <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 text-purple-700"><Reply className="w-3 h-3" /> Replied</span>;
      default:
        return <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  const getPriorityBadge = (priority: string | null) => {
    if (!priority) return <span className="text-xs text-slate-400">-</span>;
    
    switch (priority) {
      case 'urgent':
        return <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-red-100 text-red-700"><Flag className="w-3 h-3" /> Urgent</span>;
      case 'high':
        return <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-orange-100 text-orange-700"><Flag className="w-3 h-3" /> High</span>;
      case 'medium':
        return <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700"><Flag className="w-3 h-3" /> Medium</span>;
      case 'low':
        return <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-700"><Flag className="w-3 h-3" /> Low</span>;
      default:
        return <span className="text-xs text-slate-400">-</span>;
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  const openDetailModal = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDetailModal = () => {
    setIsModalOpen(false);
    setSelectedSubmission(null);
    document.body.style.overflow = 'auto';
  };

  // Filter submissions
  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = 
      sub.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.company && sub.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      sub.message?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || sub.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || sub.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Pagination
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <AdminHeader />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
          <Loader2 className="w-8 h-8 text-cyan-600 animate-spin mb-4" />
          <p className="text-slate-500">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-6 h-6 text-cyan-600" />
              Contact Submissions
            </h1>
            <p className="text-slate-600 mt-1">
              Manage contact form submissions from your website
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Server Status Indicator */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${
              serverStatus === 'online' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : serverStatus === 'offline'
                ? 'bg-red-50 text-red-700 border border-red-200'
                : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
            }`}>
              {serverStatus === 'online' ? (
                <><Database className="w-3 h-3" /> Server Online</>
              ) : serverStatus === 'offline' ? (
                <><Server className="w-3 h-3" /> Server Offline</>
              ) : (
                <><Loader2 className="w-3 h-3 animate-spin" /> Checking...</>
              )}
            </div>
            
            <button
              onClick={fetchSubmissions}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <div className="text-sm bg-white px-4 py-2 rounded-lg border border-slate-200">
              Total: {filteredSubmissions.length} submissions
            </div>
          </div>
        </div>

        {/* Server Offline Warning */}
        {serverStatus === 'offline' && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center gap-3 text-yellow-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="font-medium">Server is offline</p>
              <p className="text-sm">Showing demo data for testing. Start the backend server to see real data.</p>
            </div>
            <button 
              onClick={checkServerHealth}
              className="ml-auto px-4 py-1.5 bg-yellow-100 hover:bg-yellow-200 rounded-lg text-sm font-medium transition-colors"
            >
              Retry Connection
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && serverStatus !== 'offline' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="flex-1">{error}</p>
            <button 
              onClick={fetchSubmissions}
              className="px-4 py-1.5 bg-red-100 hover:bg-red-200 rounded-lg text-sm font-medium transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, email, company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition bg-white"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="pending">Pending</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-slate-400" />
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-4 py-2 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition bg-white"
              >
                <option value="all">All Priority</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {paginatedSubmissions.length === 0 ? (
            <div className="text-center py-16">
              <Mail className="w-16 h-16 mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500 font-medium">No submissions found</p>
              <p className="text-sm text-slate-400 mt-1">Contact form submissions will appear here</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">ID</th>
                      <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">Name</th>
                      <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">Email</th>
                      <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">Company</th>
                      <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">Project</th>
                      <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">Priority</th>
                      <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">Status</th>
                      <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">Date</th>
                      <th className="text-right text-xs font-semibold text-slate-600 uppercase tracking-wider px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {paginatedSubmissions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-slate-600 font-mono">#{sub.id}</td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">
                          {sub.full_name}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <a href={`mailto:${sub.email}`} className="text-cyan-600 hover:text-cyan-700 transition">
                            {sub.email}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {sub.company || '-'}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {sub.project_type}
                        </td>
                        <td className="px-6 py-4">
                          {getPriorityBadge(sub.priority)}
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(sub.status)}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          {formatDate(sub.created_at)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openDetailModal(sub)}
                              className="p-1.5 rounded-lg hover:bg-cyan-50 text-slate-400 hover:text-cyan-600 transition-colors"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteSubmission(sub.id)}
                              className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200">
                  <div className="text-sm text-slate-500">
                    Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredSubmissions.length)} of {filteredSubmissions.length}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="flex items-center px-3 py-1 text-sm font-medium">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Detail Modal */}
        {isModalOpen && selectedSubmission && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeDetailModal}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-600" />
                  Submission #{selectedSubmission.id}
                </h2>
                <button
                  onClick={closeDetailModal}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500">Full Name</label>
                      <p className="text-sm font-medium text-slate-900 mt-1 flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-400" />
                        {selectedSubmission.full_name}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">Email</label>
                      <p className="text-sm font-medium text-slate-900 mt-1">
                        <a href={`mailto:${selectedSubmission.email}`} className="text-cyan-600 hover:text-cyan-700 transition">
                          {selectedSubmission.email}
                        </a>
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">Company</label>
                      <p className="text-sm font-medium text-slate-900 mt-1 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        {selectedSubmission.company || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">Phone</label>
                      <p className="text-sm font-medium text-slate-900 mt-1 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400" />
                        {selectedSubmission.phone || 'Not provided'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Project Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500">Project Type</label>
                      <p className="text-sm font-medium text-slate-900 mt-1">
                        {selectedSubmission.project_type}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">Priority</label>
                      <div className="mt-1">
                        <select
                          value={selectedSubmission.priority || 'medium'}
                          onChange={(e) => updatePriority(selectedSubmission.id, e.target.value as any)}
                          disabled={updating}
                          className="px-3 py-1.5 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition text-sm w-full bg-white"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">Status</label>
                      <div className="mt-1">
                        <select
                          value={selectedSubmission.status}
                          onChange={(e) => updateStatus(selectedSubmission.id, e.target.value as any)}
                          disabled={updating}
                          className="px-3 py-1.5 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition text-sm w-full bg-white"
                        >
                          <option value="new">New</option>
                          <option value="pending">Pending</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">Assigned To</label>
                      <p className="text-sm font-medium text-slate-900 mt-1 flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-slate-400" />
                        {selectedSubmission.assigned_to || 'Not assigned'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Message</h3>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 whitespace-pre-wrap">
                        {selectedSubmission.message}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Details */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Technical Details</h3>
                  <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div>
                      <label className="text-xs text-slate-500">IP Address</label>
                      <p className="text-sm font-medium text-slate-900 mt-1 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-400" />
                        {selectedSubmission.ip_address || 'Not recorded'}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">User Agent</label>
                      <p className="text-sm font-medium text-slate-900 mt-1 flex items-center gap-2 truncate" title={selectedSubmission.user_agent || 'Not recorded'}>
                        <Monitor className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{selectedSubmission.user_agent || 'Not recorded'}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timestamps */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Timestamps</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500">Created</label>
                      <p className="text-sm font-medium text-slate-900 mt-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {formatDate(selectedSubmission.created_at)}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">Updated</label>
                      <p className="text-sm font-medium text-slate-900 mt-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {formatDate(selectedSubmission.updated_at)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent(`Response to your inquiry about ${selectedSubmission.project_type}`);
                      const body = encodeURIComponent(
                        `Dear ${selectedSubmission.full_name},\n\n` +
                        `Thank you for your inquiry regarding ${selectedSubmission.project_type}.\n\n` +
                        `We will get back to you shortly.\n\n` +
                        `Best regards,\n` +
                        ` Columbia Team`
                      );
                      window.location.href = `mailto:${selectedSubmission.email}?subject=${subject}&body=${body}`;
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all"
                  >
                    <Reply className="w-4 h-4" />
                    Reply via Email
                  </button>
                  <button
                    onClick={() => updateStatus(selectedSubmission.id, 'read')}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Mark as Read
                  </button>
                  <button
                    onClick={() => updatePriority(selectedSubmission.id, 'urgent')}
                    className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Flag className="w-4 h-4" />
                    Mark Urgent
                  </button>
                  <button
                    onClick={() => deleteSubmission(selectedSubmission.id)}
                    className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors ml-auto"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}