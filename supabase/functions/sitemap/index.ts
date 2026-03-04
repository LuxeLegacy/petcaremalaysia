import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const BASE_URL = 'https://petcaremalaysia.com';
const LASTMOD = '2026-02-20';

// Main pages
const mainPages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/locations', priority: 0.9, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/qa', priority: 0.8, changefreq: 'weekly' },
  { path: '/assessment', priority: 0.8, changefreq: 'monthly' },
  { path: '/emergency-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/sitemap', priority: 0.3, changefreq: 'monthly' },
  { path: '/terms', priority: 0.3, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.3, changefreq: 'monthly' },
  { path: '/disclaimer', priority: 0.3, changefreq: 'monthly' },
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

// PAA article slug groups (en, ms, zh per topic)
const paaArticleGroups: { en: string; ms: string; zh: string }[] = [
  { en: 'how-much-does-pet-insurance-cost-malaysia', ms: 'berapakah-kos-insurans-haiwan-peliharaan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-bao-xian-fei-yong' },
  { en: 'best-dog-breeds-malaysia-climate', ms: 'baka-anjing-terbaik-iklim-malaysia', zh: 'ma-lai-xi-ya-qi-hou-zui-jia-gou-pin-zhong' },
  { en: 'how-to-adopt-pet-malaysia', ms: 'bagaimana-adopsi-haiwan-malaysia', zh: 'ru-he-zai-ma-lai-xi-ya-ling-yang-chong-wu' },
  { en: 'what-vaccines-do-dogs-need-malaysia', ms: 'vaksin-yang-diperlukan-anjing-malaysia', zh: 'ma-lai-xi-ya-gou-xu-yao-shen-me-yi-miao' },
  { en: 'how-much-does-dog-grooming-cost-malaysia', ms: 'berapakah-kos-dandanan-anjing-malaysia', zh: 'ma-lai-xi-ya-gou-mei-rong-fei-yong' },
  { en: 'how-much-does-vet-visit-cost-malaysia', ms: 'berapakah-kos-lawatan-veterinar-malaysia', zh: 'ma-lai-xi-ya-shou-yi-fei-yong' },
  { en: 'how-to-care-for-cats-in-malaysia', ms: 'cara-menjaga-kucing-di-malaysia', zh: 'ma-lai-xi-ya-yang-mao-zhi-nan' },
  { en: 'best-pet-food-brands-malaysia', ms: 'jenama-makanan-haiwan-terbaik-malaysia', zh: 'ma-lai-xi-ya-zui-jia-chong-wu-shi-pin-pin-pai' },
  { en: 'how-to-treat-fleas-on-pets-malaysia', ms: 'cara-merawat-kutu-haiwan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-tiao-zao-zhi-liao' },
  { en: 'pet-travel-requirements-malaysia', ms: 'keperluan-perjalanan-haiwan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-lv-xing-yao-qiu' },
  { en: 'how-much-does-pet-boarding-cost-malaysia', ms: 'berapakah-kos-penginapan-haiwan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-ji-yang-fei-yong' },
  { en: 'how-much-does-pet-dental-care-cost-malaysia', ms: 'berapakah-kos-penjagaan-gigi-haiwan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-ya-chi-bao-jian-fei-yong' },
  { en: 'pet-microchipping-malaysia', ms: 'cip-haiwan-peliharaan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-zhi-ru-fei-yong' },
  { en: 'how-much-does-dog-training-cost-malaysia', ms: 'berapakah-kos-latihan-anjing-malaysia', zh: 'ma-lai-xi-ya-gou-xun-lian-fei-yong' },
  { en: 'senior-pet-care-malaysia', ms: 'penjagaan-haiwan-tua-malaysia', zh: 'ma-lai-xi-ya-lao-nian-chong-wu-hu-li' },
  { en: 'pet-allergy-treatment-malaysia', ms: 'rawatan-alahan-haiwan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-guo-min-zhi-liao' },
  { en: 'pet-spaying-neutering-cost-malaysia', ms: 'kos-pembedahan-haiwan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-jue-yu-fei-yong' },
  { en: 'pet-first-aid-kit-malaysia', ms: 'kit-kecemasan-haiwan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-ji-jiu-bao' },
  { en: 'pet-licensing-requirements-malaysia', ms: 'keperluan-lesen-haiwan-malaysia', zh: 'ma-lai-xi-ya-chong-wu-zhu-ce-yao-qiu' },
  { en: 'pet-friendly-hotels-malaysia', ms: 'hotel-mesra-haiwan-malaysia', zh: 'ma-lai-xi-ya-ke-dai-chong-wu-jiu-dian' },
];

// (Legal pages now included in mainPages as multilingual)

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

// Generate a single <url> block for one language variant with full hreflang cross-links
function generateLanguageSpecificUrl(path: string, priority: number, changefreq: string, lang: 'ms' | 'zh'): string {
  const enUrl = path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`;
  const msUrl = path === '/' ? `${BASE_URL}/ms` : `${BASE_URL}/ms${path}`;
  const zhUrl = path === '/' ? `${BASE_URL}/zh` : `${BASE_URL}/zh${path}`;
  const locUrl = lang === 'ms' ? msUrl : zhUrl;

  return `
  <url>
    <loc>${locUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>`;
}

// Generate a single PAA <url> block for one language variant
function generatePAALanguageSpecificUrl(group: { en: string; ms: string; zh: string }, lang: 'ms' | 'zh'): string {
  const enUrl = `${BASE_URL}/qa/article/${group.en}`;
  const msUrl = `${BASE_URL}/ms/qa/article/${group.ms}`;
  const zhUrl = `${BASE_URL}/zh/qa/article/${group.zh}`;
  const locUrl = lang === 'ms' ? msUrl : zhUrl;

  return `
  <url>
    <loc>${locUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>`;
}

function generateSitemap(lang?: 'ms' | 'zh'): string {
  let urls = '';

  // Helper: use language-specific or full multilingual generator
  const addUrl = (path: string, priority: number, changefreq: string) => {
    if (lang) {
      urls += generateLanguageSpecificUrl(path, priority, changefreq, lang);
    } else {
      urls += generateMultilingualUrl(path, priority, changefreq);
    }
  };

  // Main pages
  mainPages.forEach(page => addUrl(page.path, page.priority, page.changefreq));

  // Blog articles
  blogSlugs.forEach(slug => addUrl(`/blog/${slug}`, 0.7, 'monthly'));

  // Q&A state pages
  qaStates.forEach(state => addUrl(`/qa/${state}`, 0.7, 'weekly'));

  // PAA article pages
  paaArticleGroups.forEach(group => {
    if (lang) {
      urls += generatePAALanguageSpecificUrl(group, lang);
    } else {
      const enUrl = `${BASE_URL}/qa/article/${group.en}`;
      const msUrl = `${BASE_URL}/ms/qa/article/${group.ms}`;
      const zhUrl = `${BASE_URL}/zh/qa/article/${group.zh}`;
      
      urls += `
  <url>
    <loc>${enUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>
  <url>
    <loc>${msUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>
  <url>
    <loc>${zhUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>`;
    }
  });

  // City pages
  Object.entries(cityData).forEach(([state, data]) => {
    data.cities.forEach(city => {
      const priority = city.isHub ? 0.9 : 0.7;
      addUrl(`/${state}/${city.slug}`, priority, 'weekly');
    });
  });

  // Dog Dental Disease hub and sub-pages
  addUrl('/dog-dental-disease', 0.9, 'weekly');
  const dentalSubs = ['conditions/plaque-buildup','conditions/gingivitis','conditions/periodontal-disease','conditions/tooth-root-abscess','symptoms/bad-breath','symptoms/red-gums','symptoms/swollen-gums','symptoms/bleeding-gums','symptoms/dropping-food','symptoms/pawing-at-mouth','symptoms/facial-swelling','severity/early','severity/moderate','severity/advanced','emergency-signs','when-to-see-a-vet','diagnosis/oral-exam','diagnosis/dental-probing','diagnosis/dental-x-rays','treatments/professional-cleaning','treatments/tooth-extraction','treatments/antibiotic-therapy','treatments/pain-management','treatments/preventive-dental-care','recovery/post-dental-procedure','recovery/oral-healing-timeline','recovery/monitoring-for-complications','prevention/brushing','prevention/dental-checkups','prevention/diet-and-chewing-behavior'];
  dentalSubs.forEach(sub => addUrl('/dog-dental-disease/' + sub, 0.7, 'monthly'));

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
    const url = new URL(req.url);
    const langParam = url.searchParams.get('lang');
    const lang = (langParam === 'ms' || langParam === 'zh') ? langParam : undefined;
    const sitemap = generateSitemap(lang);
    
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
