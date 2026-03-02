import { useState } from 'react';
import { Save, Loader2 } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    businessName: 'Perfect Security Solution',
    contactPerson: 'Abhishek Daniel',
    phone: '+91 97136 52013',
    whatsapp: '+91 97136 52013',
    email: 'pssmahasamund786@gmail.com',
    address: 'Shop No. 123, Security Market, New Delhi - 110001',
    businessHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  });

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Settings Saved',
      description: 'Your settings have been updated successfully.',
    });
    setIsLoading(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your business information</p>
        </div>

        {/* Settings Form */}
        <div className="bg-card rounded-xl border border-border p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Business Name
            </label>
            <Input
              value={settings.businessName}
              onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Contact Person
            </label>
            <Input
              value={settings.contactPerson}
              onChange={(e) => setSettings({ ...settings, contactPerson: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                WhatsApp Number
              </label>
              <Input
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <Input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Business Address
            </label>
            <Input
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Business Hours
            </label>
            <Input
              value={settings.businessHours}
              onChange={(e) => setSettings({ ...settings, businessHours: e.target.value })}
            />
          </div>

          <Button variant="hero" onClick={handleSave} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Settings
              </>
            )}
          </Button>
        </div>

        {/* Info */}
        <div className="bg-secondary rounded-xl p-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> These settings are for display purposes.
            To make the first admin user, you need to manually add an admin role in the database.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
