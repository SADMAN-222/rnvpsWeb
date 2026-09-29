import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LogOut, Home, Users, Calendar, FileText } from 'lucide-react'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch the user's roles
  const { data: rolesData } = await supabase
    .from('role_assignments')
    .select('role')
    .eq('user_id', user.id)

  const roles = rolesData?.map(r => r.role) || []
  const isAdmin = roles.includes('admin')
  const isTeacher = roles.includes('teacher')

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">SMS Portal</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="mt-2 text-xs text-blue-600 font-semibold uppercase tracking-wider">
            {roles.join(', ')}
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600">
            <Home size={20} /> Dashboard
          </Link>
          
          {(isAdmin || isTeacher) && (
            <>
              <Link href="/dashboard/students" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600">
                <Users size={20} /> Students
              </Link>
              <Link href="/dashboard/attendance" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600">
                <Calendar size={20} /> Attendance
              </Link>
            </>
          )}

          <Link href="/dashboard/results" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600">
            <FileText size={20} /> Results
          </Link>
        </nav>
        <div className="p-4 border-t">
          <form action="/auth/signout" method="post">
            <button type="submit" className="flex items-center gap-3 w-full px-3 py-2 text-red-600 rounded-md hover:bg-red-50">
              <LogOut size={20} /> Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
