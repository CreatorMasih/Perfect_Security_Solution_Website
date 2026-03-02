import { useEffect, useState } from 'react';
import { Package, MessageSquare, TrendingUp, Clock } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/integrations/supabase/client';

interface DashboardStats {
  totalProducts: number;
  totalInquiries: number;
  newInquiries: number;
  lastSync: string;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalInquiries: 0,
    newInquiries: 0,
    lastSync: new Date().toLocaleString(),
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch products count
        const { count: productsCount } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true });

        // Fetch all inquiries count
        const { count: inquiriesCount } = await supabase
          .from('inquiries')
          .select('*', { count: 'exact', head: true });

        // Fetch new inquiries (last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        
        const { count: newInquiriesCount } = await supabase
          .from('inquiries')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', sevenDaysAgo.toISOString())
          .eq('status', 'new');

        setStats({
          totalProducts: productsCount || 0,
          totalInquiries: inquiriesCount || 0,
          newInquiries: newInquiriesCount || 0,
          lastSync: new Date().toLocaleString(),
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      label: 'Total Inquiries',
      value: stats.totalInquiries,
      icon: MessageSquare,
      color: 'bg-green-500/10 text-green-500',
    },
    {
      label: 'New Inquiries (7 days)',
      value: stats.newInquiries,
      icon: TrendingUp,
      color: 'bg-amber-500/10 text-amber-500',
    },
    {
      label: 'Last Sync',
      value: stats.lastSync,
      icon: Clock,
      color: 'bg-purple-500/10 text-purple-500',
      isText: true,
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to the admin panel</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-5 card-hover"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  {isLoading ? (
                    <div className="h-8 w-20 bg-secondary animate-pulse rounded mt-1" />
                  ) : stat.isText ? (
                    <p className="text-sm font-medium text-foreground mt-1">{stat.value}</p>
                  ) : (
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  )}
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="/admin/products"
              className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-center"
            >
              <Package className="w-8 h-8 mx-auto text-accent mb-2" />
              <p className="font-medium text-foreground">Manage Products</p>
              <p className="text-sm text-muted-foreground">Add, edit or delete products</p>
            </a>
            <a
              href="/admin/inquiries"
              className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-center"
            >
              <MessageSquare className="w-8 h-8 mx-auto text-accent mb-2" />
              <p className="font-medium text-foreground">View Inquiries</p>
              <p className="text-sm text-muted-foreground">Respond to customer queries</p>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-center"
            >
              <TrendingUp className="w-8 h-8 mx-auto text-accent mb-2" />
              <p className="font-medium text-foreground">View Website</p>
              <p className="text-sm text-muted-foreground">See live website</p>
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
