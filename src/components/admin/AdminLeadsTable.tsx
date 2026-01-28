import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Search, Eye, Download } from 'lucide-react';
import { AssessmentLead } from '@/hooks/useAssessmentLeads';

interface AdminLeadsTableProps {
  leads: AssessmentLead[];
}

const URGENCY_VARIANTS: Record<string, 'destructive' | 'default' | 'secondary' | 'outline'> = {
  CRITICAL: 'destructive',
  HIGH: 'destructive',
  MODERATE: 'default',
  LOW: 'secondary',
};

export function AdminLeadsTable({ leads }: AdminLeadsTableProps) {
  const [search, setSearch] = useState('');
  const [urgencyFilter, setUrgencyFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<AssessmentLead | null>(null);

  // Get unique states for filter
  const states = [...new Set(leads.map((l) => l.state).filter(Boolean))].sort();
  const urgencies = [...new Set(leads.map((l) => l.urgency_level).filter(Boolean))].sort();

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      search === '' ||
      lead.user_name.toLowerCase().includes(search.toLowerCase()) ||
      lead.user_email.toLowerCase().includes(search.toLowerCase()) ||
      lead.pet_name.toLowerCase().includes(search.toLowerCase()) ||
      (lead.city && lead.city.toLowerCase().includes(search.toLowerCase()));

    const matchesUrgency =
      urgencyFilter === 'all' || lead.urgency_level === urgencyFilter;

    const matchesState = stateFilter === 'all' || lead.state === stateFilter;

    return matchesSearch && matchesUrgency && matchesState;
  });

  const exportToCSV = () => {
    const headers = [
      'Date',
      'Name',
      'Email',
      'Phone',
      'Pet Name',
      'City',
      'State',
      'Urgency Level',
      'Urgency Score',
    ];

    const rows = filteredLeads.map((lead) => [
      new Date(lead.created_at).toLocaleDateString(),
      lead.user_name,
      lead.user_email,
      lead.user_phone || '',
      lead.pet_name,
      lead.city || '',
      lead.state || '',
      lead.urgency_level || '',
      lead.urgency_score?.toString() || '',
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `assessment-leads-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>Assessment Leads ({filteredLeads.length})</CardTitle>
            <Button onClick={exportToCSV} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, pet, or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Urgency" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="all">All Urgencies</SelectItem>
                {urgencies.map((u) => (
                  <SelectItem key={u} value={u!}>
                    {u}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={stateFilter} onValueChange={setStateFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="all">All States</SelectItem>
                {states.map((s) => (
                  <SelectItem key={s} value={s!}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Pet</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Urgency</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No leads found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium">{lead.user_name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {lead.user_email}
                      </TableCell>
                      <TableCell>{lead.pet_name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {lead.city}, {lead.state}
                      </TableCell>
                      <TableCell>
                        {lead.urgency_level && (
                          <Badge variant={URGENCY_VARIANTS[lead.urgency_level] || 'outline'}>
                            {lead.urgency_level}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedLead(lead)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Lead Detail Dialog */}
      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{selectedLead.user_name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedLead.user_email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{selectedLead.user_phone || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pet Name</p>
                  <p className="font-medium">{selectedLead.pet_name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">
                    {selectedLead.city}, {selectedLead.state}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Submitted</p>
                  <p className="font-medium">
                    {new Date(selectedLead.created_at).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Urgency */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Urgency Level</p>
                  {selectedLead.urgency_level && (
                    <Badge
                      variant={URGENCY_VARIANTS[selectedLead.urgency_level] || 'outline'}
                      className="mt-1"
                    >
                      {selectedLead.urgency_level}
                    </Badge>
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Urgency Score</p>
                  <p className="font-medium">{selectedLead.urgency_score || 'N/A'}</p>
                </div>
              </div>

              {/* Assessment Data */}
              {selectedLead.assessment_data && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Assessment Data</p>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-xs overflow-x-auto">
                      {JSON.stringify(selectedLead.assessment_data, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
