import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { LogOut, BarChart3, Users, RefreshCw } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useAssessmentLeads } from '@/hooks/useAssessmentLeads';
import { AdminLogin } from '@/components/admin/AdminLogin';
import { AdminAnalytics } from '@/components/admin/AdminAnalytics';
import { AdminLeadsTable } from '@/components/admin/AdminLeadsTable';
import { toast } from 'sonner';

export default function AdminPage() {
  const navigate = useNavigate();
  const { user, isLoading: authLoading, isAdmin, signOut } = useAuth();
  const { leads, analytics, isLoading: leadsLoading, error, refetch } = useAssessmentLeads();

  useEffect(() => {
    if (!authLoading && user && !isAdmin) {
      toast.error('You do not have admin access');
    }
  }, [authLoading, user, isAdmin]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin');
  };

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-muted/30 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Skeleton className="h-12 w-48" />
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-24" />
            ))}
          </div>
          <Skeleton className="h-96" />
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return <AdminLogin />;
  }

  // Not an admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground">
            You don't have permission to access the admin dashboard.
          </p>
          <p className="text-sm text-muted-foreground">
            Logged in as: {user.email}
          </p>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={refetch} variant="outline" size="sm" disabled={leadsLoading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${leadsLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button onClick={handleSignOut} variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {error ? (
          <div className="text-center py-12">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={refetch}>Try Again</Button>
          </div>
        ) : (
          <Tabs defaultValue="analytics" className="space-y-6">
            <TabsList>
              <TabsTrigger value="analytics" className="gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="leads" className="gap-2">
                <Users className="w-4 h-4" />
                Leads
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analytics">
              {leadsLoading ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="h-24" />
                    ))}
                  </div>
                  <Skeleton className="h-64" />
                </div>
              ) : analytics ? (
                <AdminAnalytics analytics={analytics} />
              ) : null}
            </TabsContent>

            <TabsContent value="leads">
              {leadsLoading ? (
                <Skeleton className="h-96" />
              ) : (
                <AdminLeadsTable leads={leads} />
              )}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
}
