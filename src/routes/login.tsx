// frontend/src/routes/login.tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import LogoImage from "@/assets/newlogo.png";

import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Shield,
  Building2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { API_BASE_URL, API_ENDPOINTS, getApiUrl, getAuthHeaders } from "@/lib/api";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login —  Columbia" },
      {
        name: "description",
        content: "Secure login portal for  Columbia clients and partners.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const healthUrl = getApiUrl(API_ENDPOINTS.HEALTH);
      const loginUrl = getApiUrl(API_ENDPOINTS.ADMIN_LOGIN);
      
      console.log('📤 Attempting login with username:', formData.username);
      console.log('🔗 API URL:', API_BASE_URL);
      
      // Check if server is reachable first
      try {
        const healthCheck = await fetch(healthUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!healthCheck.ok) {
          console.warn('⚠️ Health check failed, but continuing...');
        } else {
          console.log('✅ Server is reachable');
        }
      } catch (healthError) {
        console.warn('⚠️ Server health check failed:', healthError);
      }
      
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      console.log('📥 Response status:', response.status);

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('❌ Non-JSON response:', text);
        throw new Error('Server returned an invalid response. Please check if the backend is running correctly.');
      }

      const data = await response.json();
      console.log('📦 Response data:', data);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid username or password');
        } else if (response.status === 404) {
          throw new Error('Login endpoint not found. Please check if the backend is running.');
        } else if (response.status === 500) {
          throw new Error('Server error. Please check the backend logs.');
        } else {
          throw new Error(data?.error || `Login failed (${response.status})`);
        }
      }

      // Check if token exists in response
      if (!data.token) {
        console.error('❌ No token in response:', data);
        throw new Error('Server did not return a token. Please try again.');
      }

      // ✅ Store both token and user data
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuthenticated', 'true');
      
      console.log('✅ Login successful!');
      console.log('👤 User:', data.user);
      console.log('🔑 Token stored:', data.token.substring(0, 20) + '...');
      
      // Redirect to dashboard after successful login
      navigate({ to: "/dashboard" });
    } catch (error) {
      console.error('❌ Login error:', error);
      
      let errorMessage = 'Login failed. Please try again.';
      
      if (error instanceof Error) {
        if (error.message === 'Failed to fetch') {
          errorMessage = 'Cannot connect to the server. Please make sure the backend is running on port 5000.';
        } else {
          errorMessage = error.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4 py-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/5 to-blue-600/5 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-12 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
      >
        {/* Left Column - Login Form */}
        <div className="p-8 md:p-12 lg:p-16">
          <div className="mb-10">
            {/* <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900"> Columbia</h1>
                <p className="text-sm text-slate-500">Admin Portal</p>
              </div>
            </div> */}

       <div className="flex items-center gap-3 mb-6">
  <div className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-500/25">
    <img 
      src={LogoImage} 
      alt="Columbia Logo" 
      className="w-full h-full object-contain" 
    />
  </div>
  <div>
    <h1 className="text-2xl font-bold text-slate-900">Columbia</h1>
    <p className="text-sm text-slate-500">Admin Portal</p>
  </div>
</div>

            <h2 className="text-3xl font-bold text-slate-900">Admin Login</h2>
            <p className="mt-2 text-slate-600">Sign in to manage your projects and submissions.</p>
          </div>
        

          {/* Error Message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2"
            >
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-700">{error}</p>
                {error.includes('Cannot connect') && (
                  <div className="mt-2 text-xs text-red-600 space-y-1">
                    <p>💡 Try these steps:</p>
                    <ol className="list-decimal list-inside ml-2">
                      <li>Make sure backend is running: <code className="bg-red-100 px-1 rounded">node server.js</code></li>
                      <li>Check if port 5000 is available</li>
                      <li>Check your firewall settings</li>
                    </ol>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Username</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none text-slate-900"
                  placeholder="Enter your username"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <button type="button" className="text-sm text-cyan-600 hover:text-cyan-700 font-medium hover:underline transition">
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 bg-white/50 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none text-slate-900"
                  placeholder="••••••••"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/20 transition"
                  disabled={loading}
                />
                Remember me
              </label>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Shield className="w-4 h-4" />
                <span>256-bit SSL</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </>
              )}
            </button>

            {/* <div className="mt-6 p-4 rounded-xl bg-cyan-50 border border-cyan-200">
              <p className="text-xs text-cyan-700 text-center">
                <span className="font-semibold">🔑 Demo Credentials:</span><br />
                <span className="font-mono">Username: admin</span><br />
                <span className="font-mono">Password: admin123</span>
              </p>
            </div> */}
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            Need help?{" "}
            <button className="text-cyan-600 font-semibold hover:underline">Contact Support</button>
          </p>
        </div>

        {/* Right Column - Hero/Branding */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-cyan-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 w-fit mb-8 border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Secure Admin Portal</span>
            </div>

            <h3 className="text-4xl font-bold leading-tight mb-6">
              Manage Your<br />
              <span className="text-cyan-200">Steel Solutions</span>
            </h3>

            <p className="text-cyan-100/90 text-lg leading-relaxed mb-12 max-w-sm">
              Access the admin dashboard to manage projects, view submissions, and track deliveries.
            </p>

            <div className="space-y-4 max-w-sm">
              {[
                "View and manage contact submissions",
                "Track project progress",
                "Update submission statuses",
                "Secure admin access",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-200 flex-shrink-0" />
                  <span className="text-sm text-cyan-50">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-200" />
                <span className="text-sm text-cyan-100">Enterprise Security</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-cyan-200" />
                <span className="text-sm text-cyan-100">ISO 9001:2024</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-sm text-cyan-100/70 border-t border-white/10 pt-6 mt-12">
            <p>© 2024  Columbia. All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}