import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const sitemapData: SitemapEntry[] = [
  { url: 'https://petcaremalaysia.com/', lastmod: '2025-01-01', changefreq: 'weekly', priority: '1.0' },
  { url: 'https://petcaremalaysia.com/services', lastmod: '2025-01-01', changefreq: 'monthly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/locations', lastmod: '2025-01-01', changefreq: 'monthly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/kuala-lumpur', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/bangsar', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/cheras', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/kepong', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/setapak', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/mont-kiara', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/brickfields', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/klcc', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/wangsa-maju', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/kuala-lumpur/taman-melawati', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/petaling-jaya', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/selangor/bandar-utama', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/selangor/kota-damansara', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/selangor/ara-damansara', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/ss2', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/kelana-jaya', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/tropicana', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/taman-megah', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/shah-alam', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/selangor/setia-alam', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/bukit-jelutong', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/seksyen-7', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/selangor/seksyen-13', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/selangor/subang-jaya', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/selangor/usj', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/taipan', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/selangor/putra-heights', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/klang', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/selangor/bandar-bukit-tinggi', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/kota-kemuning', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/selangor/meru', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/selangor/port-klang', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/johor/johor-bahru', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/johor/tampoi', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/johor/skudai', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/johor/permas-jaya', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/johor/taman-molek', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/johor/iskandar-puteri', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/johor/gelang-patah', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/johor/nusajaya', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/johor/bukit-indah', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/penang/george-town', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/penang/tanjung-tokong', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/penang/tanjung-bungah', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/penang/gelugor', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/penang/bayan-lepas', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/penang/air-itam', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/penang/butterworth', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/penang/bukit-mertajam', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/penang/perai', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/penang/kepala-batas', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/penang/nibong-tebal', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/perak/ipoh', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/perak/menglembu', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/perak/tambun', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/perak/bercham', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/perak/simpang-pulai', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/sarawak/kuching', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/sarawak/petra-jaya', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/sarawak/kota-samarahan', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/sarawak/pending', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/sarawak/batu-kawa', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/sabah/kota-kinabalu', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/sabah/likas', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/sabah/inanam', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/sabah/penampang', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/sabah/putatan', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/melaka/melaka-city', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://petcaremalaysia.com/melaka/ayer-keroh', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/melaka/klebang', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/melaka/bukit-beruang', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/kedah/alor-setar', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/kedah/jitra', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/kedah/sungai-petani', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/kedah/kulim', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.7' },
  { url: 'https://petcaremalaysia.com/pahang/kuantan', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/pahang/indera-mahkota', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/pahang/gebeng', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/kelantan/kota-bharu', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/kelantan/kubang-kerian', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/kelantan/pengkalan-chepa', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
  { url: 'https://petcaremalaysia.com/terengganu/kuala-terengganu', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.8' },
  { url: 'https://petcaremalaysia.com/terengganu/gong-badak', lastmod: '2025-01-01', changefreq: 'weekly', priority: '0.6' },
];

const ITEMS_PER_PAGE = 20;

const SitemapPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = sitemapData.filter(entry =>
    entry.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <>
      <SEOHead
        title="XML Sitemap - Pet Care Malaysia"
        description="Browse all pages on Pet Care Malaysia. Find veterinary clinics and pet care services across Malaysian cities."
        canonicalUrl="https://petcaremalaysia.com/sitemap.xml"
        language="en"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
              <span className="text-4xl">🗺️</span>
              XML Sitemap - PetCareMalaysia
            </h1>
          </div>

          {/* Info Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span>ℹ️</span> What is this?
            </h2>
            <p className="text-white/90 leading-relaxed">
              This is the XML Sitemap for PetCareMalaysia.com. It helps search engines like Google, Bing, 
              and AI platforms like ChatGPT and Perplexity discover and index all pages on our website. 
              The sitemap includes all veterinary clinic listings and pet care service pages across Malaysia.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white">{sitemapData.length}</div>
              <div className="text-white/80 text-sm mt-1">Total URLs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white">2025-01-01</div>
              <div className="text-white/80 text-sm mt-1">Last Updated</div>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search URLs..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
            />
          </div>

          {/* Pagination Info */}
          <div className="flex items-center justify-between mb-4 text-white/80 text-sm">
            <span>
              Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)} of {filteredData.length} URLs
            </span>
            <span>Page {currentPage} of {totalPages}</span>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-3 text-gray-700 font-semibold text-sm">URL</th>
                    <th className="text-left px-4 py-3 text-gray-700 font-semibold text-sm hidden md:table-cell">Last Modified</th>
                    <th className="text-left px-4 py-3 text-gray-700 font-semibold text-sm hidden sm:table-cell">Change Freq</th>
                    <th className="text-left px-4 py-3 text-gray-700 font-semibold text-sm">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((entry, index) => (
                    <tr 
                      key={entry.url} 
                      className={`border-t border-gray-100 hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-4 py-3">
                        <a 
                          href={entry.url} 
                          className="text-blue-600 hover:text-blue-800 hover:underline text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {entry.url.replace('https://petcaremalaysia.com', '')}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-sm hidden md:table-cell">{entry.lastmod}</td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          entry.changefreq === 'weekly' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {entry.changefreq}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          parseFloat(entry.priority) >= 0.9 
                            ? 'bg-purple-100 text-purple-700' 
                            : parseFloat(entry.priority) >= 0.7
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {entry.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => 
                    page === 1 || 
                    page === totalPages || 
                    Math.abs(page - currentPage) <= 1
                  )
                  .map((page, idx, arr) => (
                    <span key={page} className="flex items-center">
                      {idx > 0 && arr[idx - 1] !== page - 1 && (
                        <span className="text-white/60 px-2">...</span>
                      )}
                      <Button
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page 
                          ? "bg-white text-blue-600" 
                          : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                        }
                      >
                        {page}
                      </Button>
                    </span>
                  ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-8 text-white/60 text-sm">
            <p>For the raw XML version, search engines can access: <code className="bg-white/10 px-2 py-1 rounded">/sitemap.xml</code></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
