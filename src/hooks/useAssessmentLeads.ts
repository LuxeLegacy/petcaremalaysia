import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface AssessmentLead {
  id: string;
  created_at: string;
  user_name: string;
  user_email: string;
  user_phone: string | null;
  pet_name: string;
  city: string | null;
  state: string | null;
  urgency_level: string | null;
  urgency_score: number | null;
  assessment_data: Record<string, unknown> | null;
}

export interface LeadAnalytics {
  totalLeads: number;
  leadsToday: number;
  leadsThisWeek: number;
  leadsThisMonth: number;
  byUrgency: Record<string, number>;
  byState: Record<string, number>;
  byCity: Record<string, number>;
  dailyTrend: { date: string; count: number }[];
  // Guide download specific stats
  guideDownloads: number;
  guideDownloadsToday: number;
  guideDownloadsThisWeek: number;
  guideDownloadsThisMonth: number;
}

export function useAssessmentLeads() {
  const [leads, setLeads] = useState<AssessmentLead[]>([]);
  const [analytics, setAnalytics] = useState<LeadAnalytics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('assessment_leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      const typedLeads = (data || []) as AssessmentLead[];
      setLeads(typedLeads);

      // Calculate analytics
      const now = new Date();
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weekStart = new Date(todayStart);
      weekStart.setDate(weekStart.getDate() - 7);
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

      const byUrgency: Record<string, number> = {};
      const byState: Record<string, number> = {};
      const byCity: Record<string, number> = {};
      const dailyCounts: Record<string, number> = {};

      let leadsToday = 0;
      let leadsThisWeek = 0;
      let leadsThisMonth = 0;

      // Guide download specific counters
      let guideDownloads = 0;
      let guideDownloadsToday = 0;
      let guideDownloadsThisWeek = 0;
      let guideDownloadsThisMonth = 0;

      typedLeads.forEach((lead) => {
        const createdAt = new Date(lead.created_at);
        const dateKey = createdAt.toISOString().split('T')[0];
        const isGuideDownload = lead.urgency_level === 'guide_download';

        // Count by date
        dailyCounts[dateKey] = (dailyCounts[dateKey] || 0) + 1;

        // Time-based counts
        if (createdAt >= todayStart) leadsToday++;
        if (createdAt >= weekStart) leadsThisWeek++;
        if (createdAt >= monthStart) leadsThisMonth++;

        // Guide download specific counts
        if (isGuideDownload) {
          guideDownloads++;
          if (createdAt >= todayStart) guideDownloadsToday++;
          if (createdAt >= weekStart) guideDownloadsThisWeek++;
          if (createdAt >= monthStart) guideDownloadsThisMonth++;
        }

        // By urgency
        const urgency = lead.urgency_level || 'Unknown';
        byUrgency[urgency] = (byUrgency[urgency] || 0) + 1;

        // By state
        const state = lead.state || 'Unknown';
        byState[state] = (byState[state] || 0) + 1;

        // By city
        const city = lead.city || 'Unknown';
        byCity[city] = (byCity[city] || 0) + 1;
      });

      // Generate daily trend for last 30 days
      const dailyTrend: { date: string; count: number }[] = [];
      for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateKey = date.toISOString().split('T')[0];
        dailyTrend.push({
          date: dateKey,
          count: dailyCounts[dateKey] || 0,
        });
      }

      setAnalytics({
        totalLeads: typedLeads.length,
        leadsToday,
        leadsThisWeek,
        leadsThisMonth,
        byUrgency,
        byState,
        byCity,
        dailyTrend,
        guideDownloads,
        guideDownloadsToday,
        guideDownloadsThisWeek,
        guideDownloadsThisMonth,
      });
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch leads');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  return {
    leads,
    analytics,
    isLoading,
    error,
    refetch: fetchLeads,
  };
}
