// frontend/src/routes/dashboard.tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  Mail,
  Users,
  Clock,
  CheckCircle2,
  Eye,
  AlertCircle,
  Calendar,
  ChevronRight,
  Search,
  RefreshCw,
  Building2,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";
import { API_BASE_URL, API_ENDPOINTS, getApiUrl, getAuthHeaders } from "@/lib/api";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Epitome Steel" },
      {
        name: "description",
        content: "Manage your projects, track deliveries, and access steel solutions.",
      },
    ],
  }),
  component: DashboardPage,
});

interface Submission {
  id: number;
  full_name: string;
  company: string | null;
  email: string;
  phone: string | null;
  project_type: string;
  message: string;
  status: 'pending' | 'read' | 'replied';
  created_at: string;
  updated_at: string;
}

function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const getToken = () => localStorage.getItem('adminToken') || localStorage.getItem('token');

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const token = getToken();
      if (!token) {
        setError('Please login to view submissions');
        setLoading(false);
        return;
      }

      const url = getApiUrl(API_ENDPOINTS.ADMIN_SUBMISSIONS);
      console.log('📤 Fetching submissions from:', url);

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      });

      console.log('📥 Response status:', response.status);

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setError('Session expired. Please login again.');
          setTimeout(() => navigate({ to: '/login' }), 2000);
          return;
        }
        throw new Error('Failed to fetch submissions');
      }

      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate({ to: "/login" });
    }

    fetchSubmissions();
    const interval = setInterval(fetchSubmissions, 30000);
    return () => clearInterval(interval);
  }, [navigate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'read': return 'bg-blue-100 text-blue-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-3 h-3" />;
      case 'read': return <Eye className="w-3 h-3" />;
      case 'replied': return <CheckCircle2 className="w-3 h-3" />;
      default: return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const stats = {
    total: submissions.length,
    pending: submissions.filter(s => s.status === 'pending').length,
    read: submissions.filter(s => s.status === 'read').length,
    replied: submissions.filter(s => s.status === 'replied').length,
  };

  const filteredSubmissions = submissions.filter(sub => {
    const search = searchTerm.toLowerCase();
    return sub.full_name.toLowerCase().includes(search) ||
      sub.email.toLowerCase().includes(search) ||
      (sub.company && sub.company.toLowerCase().includes(search)) ||
      sub.project_type.toLowerCase().includes(search) ||
      (sub.phone && sub.phone.includes(search));
  });

  if (!user) {
    return (
      <>
        <AdminHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-slate-200 border-t-cyan-600 rounded-full animate-spin"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Mail className="w-8 h-8 text-cyan-600" />
                Contact Submissions
              </h1>
              <p className="text-slate-600 mt-1">
                Welcome back, <span className="font-semibold">{user?.email}</span>
              </p>
            </div>
            <button
              onClick={fetchSubmissions}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-red-700">{error}</p>
                {error.includes('login') && (
                  <button
                    onClick={() => navigate({ to: '/login' })}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Go to Login →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 hover:shadow-md transition-shadow">
              <p className="text-sm text-yellow-700">Pending</p>
              <p className="text-2xl font-bold text-yellow-700">{stats.pending}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:shadow-md transition-shadow">
              <p className="text-sm text-blue-700">Read</p>
              <p className="text-2xl font-bold text-blue-700">{stats.read}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200 hover:shadow-md transition-shadow">
              <p className="text-sm text-green-700">Replied</p>
              <p className="text-2xl font-bold text-green-700">{stats.replied}</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, company, project, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
            />
          </div>

          {/* Submissions List */}
          {loading ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading submissions...</p>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">No submissions found</h3>
              <p className="text-gray-600 mt-1">
                {searchTerm ? 'Try adjusting your search' : 'No contact form submissions yet'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <User className="w-5 h-5 text-cyan-600" />
                            {submission.full_name}
                          </h3>
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                            {getStatusIcon(submission.status)}
                            {submission.status}
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            #{submission.id}
                          </span>
                        </div>
                        
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                            <a href={`mailto:${submission.email}`} className="hover:text-cyan-600 hover:underline truncate">
                              {submission.email}
                            </a>
                          </div>
                          {submission.phone && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                              <a href={`tel:${submission.phone}`} className="hover:text-cyan-600 hover:underline">
                                {submission.phone}
                              </a>
                            </div>
                          )}
                          {submission.company && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Building2 className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{submission.company}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-sm text-gray-600 sm:col-span-2 lg:col-span-3">
                            <span className="text-xs font-medium text-gray-500 uppercase">Project:</span>
                            <span className="font-medium text-gray-700">{submission.project_type}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(submission.created_at)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate({ to: "/admin/admincontacts" })}
                        className="text-sm text-cyan-600 hover:text-cyan-700 font-medium flex items-center gap-1 whitespace-nowrap"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {submission.message && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-start gap-2">
                          <MessageSquare className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {submission.message}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="text-center pt-4">
                <button
                  onClick={() => navigate({ to: "/admin/admincontacts" })}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  View All Submissions
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}