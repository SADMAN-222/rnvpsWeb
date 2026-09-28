import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
        <p className="text-gray-600">
          You are signed in as <span className="font-medium text-gray-900">{user?.email || 'demo@school.com'}</span>.
        </p>
        <p className="text-gray-600 mt-2">
          Your role and access permissions will determine what you see here. 
          Use the sidebar to navigate the school management system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-gray-900 mb-2">Today's Attendance</h3>
          <p className="text-3xl font-bold text-blue-600">--%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-gray-900 mb-2">Pending Marks</h3>
          <p className="text-3xl font-bold text-amber-500">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-gray-900 mb-2">Active Students</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
      </div>
    </div>
  )
}
