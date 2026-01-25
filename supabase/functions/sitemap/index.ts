import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const BASE_URL = 'https://petcaremalaysia.com';
const LASTMOD = '2025-01-25';

// Main pages
const mainPages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/locations', priority: 0.9, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/qa', priority: 0.8, changefreq: 'weekly' },
  { path: '/sitemap', priority: 0.3, changefreq: 'monthly' },
];

// Blog article slugs (must match BlogPage.tsx and BlogPostPage.tsx)
const blogSlugs = [
  'pet-emergency-guide-malaysia',
  'emergency-pet-care-guide',
  'pet-emergency-symptoms-malaysia',
  '24-hour-vet-directory-malaysia',
  'pet-emergency-first-aid-guide-malaysia',
  'pet-emergency-costs-malaysia',
  'common-pet-poisons-malaysia',
  'dog-emergency-guide-malaysia',
  'cat-emergency-guide-malaysia',
  'pet-heatstroke-malaysia',
  'pet-choking-emergency-malaysia',
  'pet-accident-emergency-malaysia',
  'pet-insurance-malaysia',
  'pet-poisoning-treatment-malaysia',
  'pet-emergency-transport-malaysia',
  'post-emergency-pet-care-malaysia',
  'pet-emergency-prevention-malaysia',
  'pet-nutrition-guide-malaysia',
  'pet-insurance-comparison',
  'common-pet-illnesses-malaysia',
  'pet-grooming-tips',
  'vaccinations-schedule-pets',
];

// Q&A state slugs
const qaStates = [
  'kuala-lumpur',
  'selangor',
  'johor',
  'penang',
  'perak',
  'sarawak',
  'sabah',
  'melaka',
  'kedah',
  'pahang',
  'kelantan',
  'terengganu',
  'negeri-sembilan',
  'perlis',
];

// Legal pages (English only)
const legalPages = [
  { path: '/terms', priority: 0.3, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.3, changefreq: 'monthly' },
  { path: '/disclaimer', priority: 0.3, changefreq: 'monthly' },
];

// City data organized by state
const cityData: Record<string, { cities: { slug: string; isHub: boolean }[] }> = {
  'kuala-lumpur': {
    cities: [
      { slug: 'kuala-lumpur', isHub: true },
      { slug: 'bangsar', isHub: false },
      { slug: 'cheras', isHub: false },
      { slug: 'kepong', isHub: false },
      { slug: 'setapak', isHub: false },
      { slug: 'mont-kiara', isHub: false },
      { slug: 'brickfields', isHub: false },
      { slug: 'klcc', isHub: false },
      { slug: 'wangsa-maju', isHub: false },
      { slug: 'taman-melawati', isHub: false },
    ]
  },
  'selangor': {
    cities: [
      // Petaling Jaya Hub
      { slug: 'petaling-jaya', isHub: true },
      { slug: 'bandar-utama', isHub: false },
      { slug: 'kota-damansara', isHub: false },
      { slug: 'ara-damansara', isHub: false },
      { slug: 'ss2', isHub: false },
      { slug: 'kelana-jaya', isHub: false },
      { slug: 'tropicana', isHub: false },
      { slug: 'taman-megah', isHub: false },
      // Shah Alam Hub
      { slug: 'shah-alam', isHub: true },
      { slug: 'setia-alam', isHub: false },
      { slug: 'bukit-jelutong', isHub: false },
      { slug: 'seksyen-7', isHub: false },
      { slug: 'seksyen-13', isHub: false },
      // Subang Jaya Hub
      { slug: 'subang-jaya', isHub: true },
      { slug: 'usj', isHub: false },
      { slug: 'taipan', isHub: false },
      { slug: 'putra-heights', isHub: false },
      // Klang Hub
      { slug: 'klang', isHub: true },
      { slug: 'bandar-bukit-tinggi', isHub: false },
      { slug: 'kota-kemuning', isHub: false },
      { slug: 'meru', isHub: false },
      { slug: 'port-klang', isHub: false },
    ]
  },
  'johor': {
    cities: [
      // Johor Bahru Hub
      { slug: 'johor-bahru', isHub: true },
      { slug: 'tampoi', isHub: false },
      { slug: 'skudai', isHub: false },
      { slug: 'permas-jaya', isHub: false },
      { slug: 'taman-molek', isHub: false },
      // Iskandar Hub
      { slug: 'iskandar-puteri', isHub: true },
      { slug: 'gelang-patah', isHub: false },
      { slug: 'nusajaya', isHub: false },
      { slug: 'bukit-indah', isHub: false },
      // Other Johor cities
      { slug: 'batu-pahat', isHub: true },
      { slug: 'yong-peng', isHub: false },
      { slug: 'parit-raja', isHub: false },
      { slug: 'muar', isHub: true },
      { slug: 'tangkak', isHub: false },
      { slug: 'kulai', isHub: true },
      { slug: 'senai', isHub: false },
    ]
  },
  'penang': {
    cities: [
      // George Town Hub
      { slug: 'george-town', isHub: true },
      { slug: 'tanjung-tokong', isHub: false },
      { slug: 'tanjung-bungah', isHub: false },
      { slug: 'gelugor', isHub: false },
      { slug: 'bayan-lepas', isHub: false },
      { slug: 'air-itam', isHub: false },
      // Seberang Perai Hub
      { slug: 'butterworth', isHub: true },
      { slug: 'bukit-mertajam', isHub: false },
      { slug: 'perai', isHub: false },
      { slug: 'kepala-batas', isHub: false },
      { slug: 'nibong-tebal', isHub: false },
    ]
  },
  'perak': {
    cities: [
      // Ipoh Hub
      { slug: 'ipoh', isHub: true },
      { slug: 'menglembu', isHub: false },
      { slug: 'tambun', isHub: false },
      { slug: 'bercham', isHub: false },
      { slug: 'simpang-pulai', isHub: false },
      // Taiping Hub
      { slug: 'taiping', isHub: true },
      { slug: 'kamunting', isHub: false },
    ]
  },
  'sarawak': {
    cities: [
      // Kuching Hub
      { slug: 'kuching', isHub: true },
      { slug: 'petra-jaya', isHub: false },
      { slug: 'kota-samarahan', isHub: false },
      { slug: 'pending', isHub: false },
      { slug: 'batu-kawa', isHub: false },
      // Sibu Hub
      { slug: 'sibu', isHub: true },
      { slug: 'mukah', isHub: false },
      // Miri Hub
      { slug: 'miri', isHub: true },
    ]
  },
  'sabah': {
    cities: [
      // Kota Kinabalu Hub
      { slug: 'kota-kinabalu', isHub: true },
      { slug: 'penampang', isHub: false },
      { slug: 'likas', isHub: false },
      { slug: 'inanam', isHub: false },
      { slug: 'tuaran', isHub: false },
      // Sandakan Hub
      { slug: 'sandakan', isHub: true },
      { slug: 'batu-sapi', isHub: false },
    ]
  },
  'melaka': {
    cities: [
      { slug: 'melaka', isHub: true },
      { slug: 'ayer-keroh', isHub: false },
      { slug: 'batu-berendam', isHub: false },
      { slug: 'bukit-baru', isHub: false },
      { slug: 'alor-gajah', isHub: false },
    ]
  },
  'negeri-sembilan': {
    cities: [
      { slug: 'seremban', isHub: true },
      { slug: 'nilai', isHub: false },
      { slug: 'port-dickson', isHub: false },
      { slug: 'mantin', isHub: false },
    ]
  },
  'pahang': {
    cities: [
      { slug: 'kuantan', isHub: true },
      { slug: 'indera-mahkota', isHub: false },
      { slug: 'gambang', isHub: false },
      { slug: 'beserah', isHub: false },
    ]
  },
  'kedah': {
    cities: [
      // Sungai Petani Hub
      { slug: 'sungai-petani', isHub: true },
      { slug: 'kuala-ketil', isHub: false },
      // Alor Setar Hub
      { slug: 'alor-setar', isHub: true },
      { slug: 'jitra', isHub: false },
    ]
  },
  'kelantan': {
    cities: [
      { slug: 'kota-bharu', isHub: true },
    ]
  },
  'terengganu': {
    cities: [
      { slug: 'kuala-terengganu', isHub: true },
    ]
  },
  'perlis': {
    cities: [
      { slug: 'kangar', isHub: true },
      { slug: 'arau', isHub: false },
    ]
  },
};

// Helper function to generate URL with hreflang annotations for multilingual pages
function generateMultilingualUrl(path: string, priority: number, changefreq: string): string {
  const enUrl = path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`;
  const msUrl = path === '/' ? `${BASE_URL}/ms` : `${BASE_URL}/ms${path}`;
  const zhUrl = path === '/' ? `${BASE_URL}/zh` : `${BASE_URL}/zh${path}`;
  
  return `
  <url>
    <loc>${enUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>
  <url>
    <loc>${msUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>
  <url>
    <loc>${zhUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>`;
}

// Helper function for English-only pages
function generateEnglishOnlyUrl(path: string, priority: number, changefreq: string): string {
  return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap(): string {
  let urls = '';
  
  // Main pages (multilingual)
  mainPages.forEach(page => {
    urls += generateMultilingualUrl(page.path, page.priority, page.changefreq);
  });
  
  // Blog articles (multilingual)
  blogSlugs.forEach(slug => {
    urls += generateMultilingualUrl(`/blog/${slug}`, 0.7, 'monthly');
  });
  
  // Q&A state pages (multilingual)
  qaStates.forEach(state => {
    urls += generateMultilingualUrl(`/qa/${state}`, 0.7, 'weekly');
  });
  
  // City pages (multilingual)
  Object.entries(cityData).forEach(([state, data]) => {
    data.cities.forEach(city => {
      const priority = city.isHub ? 0.9 : 0.7;
      urls += generateMultilingualUrl(`/${state}/${city.slug}`, priority, 'weekly');
    });
  });
  
  // Legal pages (English only)
  legalPages.forEach(page => {
    urls += generateEnglishOnlyUrl(page.path, page.priority, page.changefreq);
  });
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const sitemap = generateSitemap();
    
    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate sitemap' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
