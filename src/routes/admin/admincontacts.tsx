// // frontend/src/routes/admin/admincontacts.tsx
// import { createFileRoute } from "@tanstack/react-router";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { 
//   Mail, 
//   Phone, 
//   User, 
//   Building2, 
//   Calendar, 
//   Search, 
//   Eye,
//   ChevronLeft,
//   ChevronRight,
//   Loader2,
//   AlertCircle,
//   RefreshCw,
//   Trash2,
//   MessageSquare
// } from "lucide-react";

// interface ContactSubmission {
//   id: number;
//   full_name: string;
//   company: string;
//   email: string;
//   phone: string;
//   project_type: string;
//   message: string;
//   created_at: string;
//   status?: string;
// }

// export const Route = createFileRoute("/admin/admincontacts")({
//   head: () => ({
//     meta: [
//       { title: "Contact Submissions — Admin" },
//       { name: "description", content: "View all contact form submissions." },
//     ],
//   }),
//   component: AdminContactsPage,
// });

// function AdminContactsPage() {
//   const [contacts, setContacts] = useState<ContactSubmission[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
//       const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
      
//       console.log('📤 Fetching contacts from:', `${API_URL}/api/admin/submissions`);
//       console.log('🔑 Using token:', token ? 'Yes' : 'No');

//       const response = await fetch(`${API_URL}/api/admin/submissions`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       console.log('📥 Response status:', response.status);

//       if (!response.ok) {
//         if (response.status === 401) {
//           throw new Error('Unauthorized. Please login again.');
//         }
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.error || 'Failed to fetch contacts');
//       }

//       const data = await response.json();
//       console.log('📦 Contacts data:', data);

//       // Handle the response structure - your API returns { submissions: [...] }
//       let contactsData = [];
//       if (data.submissions && Array.isArray(data.submissions)) {
//         contactsData = data.submissions;
//       } else if (Array.isArray(data)) {
//         contactsData = data;
//       } else if (data.data && Array.isArray(data.data)) {
//         contactsData = data.data;
//       } else {
//         contactsData = [];
//       }

//       setContacts(contactsData);
//     } catch (err) {
//       console.error('❌ Error fetching contacts:', err);
//       setError(err instanceof Error ? err.message : 'Failed to load contacts');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteContact = async (id: number) => {
//     if (!confirm('Are you sure you want to delete this contact submission?')) return;

//     try {
//       const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
//       const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
      
//       const response = await fetch(`${API_URL}/api/admin/submissions/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete contact');
//       }

//       setContacts(contacts.filter(c => c.id !== id));
//       if (selectedContact?.id === id) {
//         setShowDetailModal(false);
//         setSelectedContact(null);
//       }
//     } catch (err) {
//       alert('Failed to delete contact. Please try again.');
//     }
//   };

//   const updateStatus = async (id: number, status: string) => {
//     try {
//       const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
//       const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
      
//       const response = await fetch(`${API_URL}/api/admin/submissions/${id}/status`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ status }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update status');
//       }

//       // Update local state
//       setContacts(contacts.map(c => 
//         c.id === id ? { ...c, status } : c
//       ));
      
//       if (selectedContact?.id === id) {
//         setSelectedContact({ ...selectedContact, status });
//       }
//     } catch (err) {
//       alert('Failed to update status. Please try again.');
//     }
//   };

//   // Filter contacts based on search
//   const filteredContacts = contacts.filter(contact =>
//     contact.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     contact.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     contact.project_type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentContacts = filteredContacts.slice(startIndex, endIndex);

//   const formatDate = (dateString: string) => {
//     if (!dateString) return 'N/A';
//     try {
//       return new Date(dateString).toLocaleDateString('en-IN', {
//         day: '2-digit',
//         month: 'short',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//       });
//     } catch {
//       return dateString;
//     }
//   };

//   const getStatusColor = (status?: string) => {
//     switch(status?.toLowerCase()) {
//       case 'pending': return 'bg-yellow-100 text-yellow-700';
//       case 'read': return 'bg-blue-100 text-blue-700';
//       case 'replied': return 'bg-green-100 text-green-700';
//       default: return 'bg-gray-100 text-gray-700';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8 flex justify-between items-start">
//           <div>
//             <h1 className="text-3xl font-bold text-slate-900">Contact Submissions</h1>
//             <p className="text-slate-600 mt-1">View and manage all contact form inquiries</p>
//           </div>
//           <button
//             onClick={fetchContacts}
//             disabled={loading}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50"
//           >
//             <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
//             Refresh
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200">
//             <p className="text-sm text-slate-600">Total Submissions</p>
//             <p className="text-2xl font-bold text-slate-900">{contacts.length}</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200">
//             <p className="text-sm text-slate-600">This Month</p>
//             <p className="text-2xl font-bold text-slate-900">
//               {contacts.filter(c => {
//                 if (!c.created_at) return false;
//                 try {
//                   const date = new Date(c.created_at);
//                   const now = new Date();
//                   return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
//                 } catch {
//                   return false;
//                 }
//               }).length}
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200">
//             <p className="text-sm text-slate-600">PEB Buildings</p>
//             <p className="text-2xl font-bold text-slate-900">
//               {contacts.filter(c => c.project_type === 'PEB Building').length}
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200">
//             <p className="text-sm text-slate-600">Structural Steel</p>
//             <p className="text-2xl font-bold text-slate-900">
//               {contacts.filter(c => c.project_type === 'Structural Steel').length}
//             </p>
//           </div>
//         </div>

//         {/* Search and Filter */}
//         <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200 mb-6">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="Search by name, email, company, project type, or message..."
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setCurrentPage(1);
//                 }}
//                 className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Error State */}
//         {error && (
//           <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
//             <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
//             <div className="flex-1">
//               <p className="text-sm text-red-700">{error}</p>
//               <button 
//                 onClick={fetchContacts}
//                 className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium"
//               >
//                 Try again
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && (
//           <div className="flex flex-col justify-center items-center py-12">
//             <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
//             <p className="mt-3 text-sm text-slate-600">Loading contacts...</p>
//           </div>
//         )}

//         {/* Contacts Table */}
//         {!loading && !error && (
//           <>
//             <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-slate-50 border-b border-slate-200">
//                     <tr>
//                       <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">#</th>
//                       <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</th>
//                       <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Company</th>
//                       <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</th>
//                       <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Project Type</th>
//                       <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
//                       <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
//                       <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-slate-200">
//                     {currentContacts.length === 0 ? (
//                       <tr>
//                         <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
//                           {searchTerm ? 'No contacts match your search' : 'No contacts found'}
//                         </td>
//                       </tr>
//                     ) : (
//                       currentContacts.map((contact, index) => (
//                         <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
//                           <td className="px-4 py-3 text-sm text-slate-600">{startIndex + index + 1}</td>
//                           <td className="px-4 py-3">
//                             <div className="flex items-center gap-2">
//                               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
//                                 <User className="w-4 h-4 text-blue-600" />
//                               </div>
//                               <span className="text-sm font-medium text-slate-900">{contact.full_name}</span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-3 text-sm text-slate-600">
//                             <div className="flex items-center gap-1">
//                               <Building2 className="w-3 h-3 text-slate-400" />
//                               {contact.company || '-'}
//                             </div>
//                           </td>
//                           <td className="px-4 py-3 text-sm text-slate-600">
//                             <div className="flex items-center gap-1">
//                               <Mail className="w-3 h-3 text-slate-400" />
//                               <span className="truncate max-w-[150px]">{contact.email}</span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-3">
//                             <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700">
//                               {contact.project_type || 'N/A'}
//                             </span>
//                           </td>
//                           <td className="px-4 py-3">
//                             <select
//                               value={contact.status || 'pending'}
//                               onChange={(e) => updateStatus(contact.id, e.target.value)}
//                               className={`text-xs font-medium rounded-full px-2 py-1 border-0 focus:ring-2 focus:ring-blue-500 ${getStatusColor(contact.status)}`}
//                             >
//                               <option value="pending">Pending</option>
//                               <option value="read">Read</option>
//                               <option value="replied">Replied</option>
//                             </select>
//                           </td>
//                           <td className="px-4 py-3 text-sm text-slate-600">
//                             <div className="flex items-center gap-1">
//                               <Calendar className="w-3 h-3 text-slate-400" />
//                               {formatDate(contact.created_at)}
//                             </div>
//                           </td>
//                           <td className="px-4 py-3">
//                             <div className="flex items-center gap-2">
//                               <button
//                                 onClick={() => {
//                                   setSelectedContact(contact);
//                                   setShowDetailModal(true);
//                                 }}
//                                 className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors text-blue-600"
//                                 title="View details"
//                               >
//                                 <Eye className="w-4 h-4" />
//                               </button>
//                               <button
//                                 onClick={() => deleteContact(contact.id)}
//                                 className="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-red-600"
//                                 title="Delete"
//                               >
//                                 <Trash2 className="w-4 h-4" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
//                 <p className="text-sm text-slate-600">
//                   Showing {filteredContacts.length === 0 ? 0 : startIndex + 1} to {Math.min(endIndex, filteredContacts.length)} of {filteredContacts.length} entries
//                 </p>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                     className="p-2 rounded-lg border border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                   >
//                     <ChevronLeft className="w-4 h-4" />
//                   </button>
//                   <span className="px-4 py-2 text-sm font-medium">
//                     Page {currentPage} of {totalPages}
//                   </span>
//                   <button
//                     onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                     disabled={currentPage === totalPages}
//                     className="p-2 rounded-lg border border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                   >
//                     <ChevronRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Detail Modal */}
//       {showDetailModal && selectedContact && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//           >
//             <div className="p-6 border-b border-slate-200">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-xl font-bold text-slate-900">Contact Details</h2>
//                   <p className="text-sm text-slate-600 mt-1">Submitted on {formatDate(selectedContact.created_at)}</p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     setShowDetailModal(false);
//                     setSelectedContact(null);
//                   }}
//                   className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>

//             <div className="p-6 space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name</label>
//                   <p className="mt-1 text-sm font-medium text-slate-900">{selectedContact.full_name}</p>
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Company</label>
//                   <p className="mt-1 text-sm text-slate-900">{selectedContact.company || 'Not provided'}</p>
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</label>
//                   <p className="mt-1 text-sm text-slate-900">{selectedContact.email}</p>
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone</label>
//                   <p className="mt-1 text-sm text-slate-900">{selectedContact.phone || 'Not provided'}</p>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Project Type</label>
//                   <p className="mt-1 text-sm text-slate-900">{selectedContact.project_type || 'Not specified'}</p>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</label>
//                   <div className="mt-1">
//                     <select
//                       value={selectedContact.status || 'pending'}
//                       onChange={(e) => {
//                         const newStatus = e.target.value;
//                         updateStatus(selectedContact.id, newStatus);
//                         setSelectedContact({ ...selectedContact, status: newStatus });
//                       }}
//                       className={`text-sm font-medium rounded-full px-3 py-1 border-0 focus:ring-2 focus:ring-blue-500 ${getStatusColor(selectedContact.status)}`}
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="read">Read</option>
//                       <option value="replied">Replied</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Message</label>
//                   <div className="mt-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
//                     <p className="text-sm text-slate-700 whitespace-pre-wrap">{selectedContact.message}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 border-t border-slate-200 flex justify-end gap-3">
//               <button
//                 onClick={() => {
//                   setShowDetailModal(false);
//                   setSelectedContact(null);
//                 }}
//                 className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors text-sm font-medium"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => deleteContact(selectedContact.id)}
//                 className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition-colors text-sm font-medium text-white"
//               >
//                 Delete
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }







// frontend/src/routes/admin/admincontacts.tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { 
  Mail, 
  Phone, 
  User, 
  Building2, 
  Calendar, 
  Search, 
  Eye,
  ChevronLeft,
  ChevronRight,
  Loader2,
  AlertCircle,
  RefreshCw,
  Trash2,
  MessageSquare,
  Clock,
  CheckCircle2
} from "lucide-react";

interface ContactSubmission {
  id: number;
  full_name: string;
  company: string;
  email: string;
  phone: string;
  project_type: string;
  message: string;
  created_at: string;
  status?: string;
}

export const Route = createFileRoute("/admin/admincontacts")({
  head: () => ({
    meta: [
      { title: "Contact Submissions — Admin" },
      { name: "description", content: "View all contact form submissions." },
    ],
  }),
  component: AdminContactsPage,
});

function AdminContactsPage() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
      
      console.log('📤 Fetching contacts from:', `${API_URL}/api/admin/submissions`);
      console.log('🔑 Using token:', token ? 'Yes' : 'No');

      const response = await fetch(`${API_URL}/api/admin/submissions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
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
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to fetch contacts');
      }

      const data = await response.json();
      console.log('📦 Contacts data:', data);

      // Handle the response structure - your API returns { submissions: [...] }
      let contactsData = [];
      if (data.submissions && Array.isArray(data.submissions)) {
        contactsData = data.submissions;
      } else if (Array.isArray(data)) {
        contactsData = data;
      } else if (data.data && Array.isArray(data.data)) {
        contactsData = data.data;
      } else {
        contactsData = [];
      }

      setContacts(contactsData);
    } catch (err) {
      console.error('❌ Error fetching contacts:', err);
      setError(err instanceof Error ? err.message : 'Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: number) => {
    if (!confirm('Are you sure you want to delete this contact submission?')) return;

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
      
      const response = await fetch(`${API_URL}/api/admin/submissions/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      setContacts(contacts.filter(c => c.id !== id));
      if (selectedContact?.id === id) {
        setShowDetailModal(false);
        setSelectedContact(null);
      }
    } catch (err) {
      alert('Failed to delete contact. Please try again.');
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
      
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

      // Update local state
      setContacts(contacts.map(c => 
        c.id === id ? { ...c, status } : c
      ));
      
      if (selectedContact?.id === id) {
        setSelectedContact({ ...selectedContact, status });
      }
    } catch (err) {
      alert('Failed to update status. Please try again.');
    }
  };

  // Filter contacts based on search
  const filteredContacts = contacts.filter(contact =>
    contact.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.project_type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContacts = filteredContacts.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const getStatusColor = (status?: string) => {
    switch(status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'read': return 'bg-blue-100 text-blue-700';
      case 'replied': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status?: string) => {
    switch(status?.toLowerCase()) {
      case 'pending': return <Clock className="w-3 h-3" />;
      case 'read': return <Eye className="w-3 h-3" />;
      case 'replied': return <CheckCircle2 className="w-3 h-3" />;
      default: return null;
    }
  };

  // Stats
  const stats = {
    total: contacts.length,
    pending: contacts.filter(c => c.status?.toLowerCase() === 'pending').length,
    read: contacts.filter(c => c.status?.toLowerCase() === 'read').length,
    replied: contacts.filter(c => c.status?.toLowerCase() === 'replied').length,
  };

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
                View and manage all contact form inquiries
              </p>
            </div>
            <button
              onClick={fetchContacts}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div className="flex-1">
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
              placeholder="Search by name, email, company, project type, or message..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
            />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading contacts...</p>
            </div>
          )}

          {/* Contacts Table */}
          {!loading && !error && (
            <>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">#</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Company</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Project Type</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {currentContacts.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                            {searchTerm ? 'No contacts match your search' : 'No contacts found'}
                          </td>
                        </tr>
                      ) : (
                        currentContacts.map((contact, index) => (
                          <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 text-sm text-gray-600">{startIndex + index + 1}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                  <User className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-900">{contact.full_name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Building2 className="w-3 h-3 text-gray-400" />
                                {contact.company || '-'}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Mail className="w-3 h-3 text-gray-400" />
                                <span className="truncate max-w-[150px]">{contact.email}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700">
                                {contact.project_type || 'N/A'}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <select
                                value={contact.status || 'pending'}
                                onChange={(e) => updateStatus(contact.id, e.target.value)}
                                className={`text-xs font-medium rounded-full px-2 py-1 border-0 focus:ring-2 focus:ring-cyan-500 ${getStatusColor(contact.status)}`}
                              >
                                <option value="pending">Pending</option>
                                <option value="read">Read</option>
                                <option value="replied">Replied</option>
                              </select>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-gray-400" />
                                {formatDate(contact.created_at)}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => {
                                    setSelectedContact(contact);
                                    setShowDetailModal(true);
                                  }}
                                  className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors text-blue-600"
                                  title="View details"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => deleteContact(contact.id)}
                                  className="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-red-600"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
                  <p className="text-sm text-gray-600">
                    Showing {filteredContacts.length === 0 ? 0 : startIndex + 1} to {Math.min(endIndex, filteredContacts.length)} of {filteredContacts.length} entries
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 text-sm font-medium">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Contact Details</h2>
                  <p className="text-sm text-gray-600 mt-1">Submitted on {formatDate(selectedContact.created_at)}</p>
                </div>
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    setSelectedContact(null);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                  <p className="mt-1 text-sm font-medium text-gray-900">{selectedContact.full_name}</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedContact.company || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedContact.email}</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedContact.phone || 'Not provided'}</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Project Type</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedContact.project_type || 'Not specified'}</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</label>
                  <div className="mt-1">
                    <select
                      value={selectedContact.status || 'pending'}
                      onChange={(e) => {
                        const newStatus = e.target.value;
                        updateStatus(selectedContact.id, newStatus);
                        setSelectedContact({ ...selectedContact, status: newStatus });
                      }}
                      className={`text-sm font-medium rounded-full px-3 py-1 border-0 focus:ring-2 focus:ring-cyan-500 ${getStatusColor(selectedContact.status)}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</label>
                  <div className="mt-2 p-4 bg-slate-50 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDetailModal(false);
                  setSelectedContact(null);
                }}
                className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Close
              </button>
              <button
                onClick={() => deleteContact(selectedContact.id)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition-colors text-sm font-medium text-white"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}