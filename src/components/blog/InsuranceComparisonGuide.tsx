import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, DollarSign, CheckCircle2, XCircle, Star, TrendingUp, Calculator, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox } from './ArticleLayout';
import { RelatedArticles } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import insuranceHero from '@/assets/insurance-hero.jpg';
import { Language } from '@/lib/translations';

const getContent = (language: Language) => {
  const content = {
    en: {
      metaTitle: "Pet Insurance Comparison Malaysia 2025: Oyen vs MSIG vs Etiqa",
      metaDescription: "Compare Malaysia's top pet insurance providers. Oyen, MSIG, Etiqa side-by-side: coverage, costs RM 30-150/month, claims process, pros & cons.",
      title: "Pet Insurance in Malaysia: Oyen vs MSIG vs Etiqa Compared (2025)",
      category: "Insurance",
      date: "January 5, 2025",
      readTime: "12 min read",
      reviewedBy: "Reviewed by Licensed Insurance Advisors",
      heroAlt: "Comparing pet insurance providers in Malaysia",
      heroCaption: "Find the best pet insurance for your furry friend",
      tldr: [
        "Oyen: Best for fast claims (24-48 hours), app-based, RM 45-120/month",
        "MSIG: Best for established insurer trust, RM 60-150/month",
        "Etiqa: Best for high annual limits (up to RM 30,000), RM 70-120/month",
        "All cover accidents + illness; pre-existing conditions excluded",
        "Buy while pet is young (under 8) for lower premiums"
      ],
      tocItems: [
        { id: "overview", title: "Quick Comparison Overview" },
        { id: "oyen", title: "Oyen Pet Insurance" },
        { id: "msig", title: "MSIG Pet Insurance" },
        { id: "etiqa", title: "Etiqa Pet Care" },
        { id: "directasia", title: "DirectAsia Pet Insurance" },
        { id: "coverage", title: "Coverage Comparison" },
        { id: "costs", title: "Cost Comparison" },
        { id: "claims", title: "Claims Process Comparison" },
        { id: "verdict", title: "Our Verdict: Which to Choose?" },
        { id: "faqs", title: "Frequently Asked Questions" },
      ],
      intro: "Choosing pet insurance in Malaysia can be confusing with multiple providers offering different plans. We've done the research so you don't have to. This comprehensive comparison covers Oyen, MSIG, Etiqa, and DirectAsia—the main pet insurance providers in Malaysia.",
      overviewTitle: "Quick Comparison Overview",
      oyenTitle: "Oyen Pet Insurance",
      oyenDesc: "Oyen is Malaysia's most popular pet insurance startup, known for its modern app-based experience and fast claims processing.",
      oyenPros: [
        "Fastest claims: 24-48 hours processing",
        "User-friendly mobile app",
        "No age limit for enrollment",
        "Transparent pricing online",
        "E-wallet reimbursement option"
      ],
      oyenCons: [
        "Newer company (less track record)",
        "Lower annual limits than some competitors",
        "No physical office for in-person queries"
      ],
      msigTitle: "MSIG Pet Insurance",
      msigDesc: "MSIG is an established international insurer with decades of experience. Their pet insurance offers solid coverage backed by a trusted brand.",
      msigPros: [
        "Established, trusted insurer",
        "Third-party liability included",
        "Wide agent network for support",
        "Available through major banks"
      ],
      msigCons: [
        "Slower claims (7-14 days)",
        "Paper-based claim process",
        "Age restrictions (usually 8 weeks to 8 years)",
        "Higher premiums for older pets"
      ],
      etiqaTitle: "Etiqa Pet Care",
      etiqaDesc: "Etiqa offers some of the highest annual limits in Malaysia, making it suitable for owners who want maximum protection.",
      etiqaPros: [
        "Highest annual limits (up to RM 30,000)",
        "Third-party liability included",
        "Part of Maybank group",
        "Good for high-value breeds"
      ],
      etiqaCons: [
        "Less flexible plans",
        "Claims can take 14-21 days",
        "Stricter enrollment requirements"
      ],
      directAsiaTitle: "DirectAsia Pet Insurance",
      directAsiaDesc: "DirectAsia offers competitive pricing with a straightforward claims process, suitable for budget-conscious pet owners.",
      directAsiaPros: [
        "Competitive pricing",
        "Simple online application",
        "Good reimbursement rate (80%)",
        "RM 20,000 annual limit"
      ],
      directAsiaCons: [
        "Less brand recognition",
        "Limited add-on options",
        "Fewer local agents"
      ],
      coverageTitle: "Coverage Comparison Table",
      costsTitle: "Monthly Cost Comparison",
      costsNote: "Costs vary by pet age, breed, and coverage level. Young, healthy pets get the lowest rates.",
      claimsTitle: "Claims Process Comparison",
      verdictTitle: "Our Verdict: Which to Choose?",
      verdictOyen: "Choose Oyen if: You want fast claims, prefer app-based management, or have an older pet that other insurers won't cover.",
      verdictMsig: "Choose MSIG if: You prefer established insurers, want third-party liability, or prefer agent support.",
      verdictEtiqa: "Choose Etiqa if: You have a high-value breed, want maximum coverage limits, or prefer Maybank integration.",
      verdictDirect: "Choose DirectAsia if: You're budget-conscious but still want comprehensive accident + illness coverage.",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "Can I switch pet insurance providers?",
          a: "Yes, but any conditions diagnosed under your old policy become pre-existing and won't be covered by the new insurer. Switch during renewal, not mid-policy."
        },
        {
          q: "Which provider has the fastest claims?",
          a: "Oyen consistently processes claims in 24-48 hours. Traditional insurers like MSIG take 7-14 days."
        },
        {
          q: "Do all providers cover emergency vet visits?",
          a: "Yes, all major Malaysian pet insurers cover emergency vet visits under their accident and illness plans."
        },
        {
          q: "Is there pet insurance for exotic pets?",
          a: "Currently, most Malaysian providers only insure dogs and cats. Exotic pet insurance is not widely available yet."
        },
        {
          q: "What's the best age to buy pet insurance?",
          a: "Ideally between 8 weeks and 2 years old. Premiums are lowest and no pre-existing conditions exist yet."
        }
      ],
      ctaTitle: "Ready to Protect Your Pet?",
      ctaText: "Compare quotes from all providers and find the best coverage for your furry friend.",
    },
    ms: {
      metaTitle: "Perbandingan Insurans Haiwan Peliharaan Malaysia 2025: Oyen vs MSIG vs Etiqa",
      metaDescription: "Bandingkan penyedia insurans haiwan peliharaan terbaik Malaysia. Oyen, MSIG, Etiqa secara bersama: perlindungan, kos RM 30-150/bulan, proses tuntutan.",
      title: "Insurans Haiwan Peliharaan di Malaysia: Perbandingan Oyen vs MSIG vs Etiqa (2025)",
      category: "Insurans",
      date: "5 Januari 2025",
      readTime: "12 minit bacaan",
      reviewedBy: "Disemak oleh Penasihat Insurans Berlesen",
      heroAlt: "Membandingkan penyedia insurans haiwan peliharaan di Malaysia",
      heroCaption: "Cari insurans haiwan peliharaan terbaik untuk teman berbulu anda",
      tldr: [
        "Oyen: Terbaik untuk tuntutan pantas (24-48 jam), berasaskan aplikasi, RM 45-120/bulan",
        "MSIG: Terbaik untuk kepercayaan syarikat insurans yang mantap, RM 60-150/bulan",
        "Etiqa: Terbaik untuk had tahunan tinggi (sehingga RM 30,000), RM 70-120/bulan",
        "Semua melindungi kemalangan + penyakit; keadaan sedia ada dikecualikan",
        "Beli semasa haiwan peliharaan masih muda (bawah 8 tahun) untuk premium lebih rendah"
      ],
      tocItems: [
        { id: "overview", title: "Gambaran Keseluruhan Perbandingan" },
        { id: "oyen", title: "Insurans Haiwan Oyen" },
        { id: "msig", title: "Insurans Haiwan MSIG" },
        { id: "etiqa", title: "Etiqa Pet Care" },
        { id: "directasia", title: "DirectAsia Pet Insurance" },
        { id: "coverage", title: "Perbandingan Perlindungan" },
        { id: "costs", title: "Perbandingan Kos" },
        { id: "claims", title: "Perbandingan Proses Tuntutan" },
        { id: "verdict", title: "Keputusan Kami: Mana Satu Dipilih?" },
        { id: "faqs", title: "Soalan Lazim" },
      ],
      intro: "Memilih insurans haiwan peliharaan di Malaysia boleh mengelirukan dengan pelbagai penyedia menawarkan pelan berbeza. Kami telah melakukan penyelidikan supaya anda tidak perlu. Perbandingan komprehensif ini merangkumi Oyen, MSIG, Etiqa, dan DirectAsia—penyedia insurans haiwan peliharaan utama di Malaysia.",
      overviewTitle: "Gambaran Keseluruhan Perbandingan",
      oyenTitle: "Insurans Haiwan Oyen",
      oyenDesc: "Oyen adalah startup insurans haiwan peliharaan paling popular di Malaysia, terkenal dengan pengalaman berasaskan aplikasi moden dan pemprosesan tuntutan pantas.",
      oyenPros: [
        "Tuntutan terpantas: pemprosesan 24-48 jam",
        "Aplikasi mudah alih mesra pengguna",
        "Tiada had umur untuk pendaftaran",
        "Harga telus dalam talian",
        "Pilihan pembayaran balik e-wallet"
      ],
      oyenCons: [
        "Syarikat lebih baru (kurang rekod)",
        "Had tahunan lebih rendah daripada pesaing",
        "Tiada pejabat fizikal untuk pertanyaan"
      ],
      msigTitle: "Insurans Haiwan MSIG",
      msigDesc: "MSIG adalah syarikat insurans antarabangsa yang mantap dengan pengalaman berdekad. Insurans haiwan mereka menawarkan perlindungan kukuh dengan jenama dipercayai.",
      msigPros: [
        "Syarikat insurans mantap dan dipercayai",
        "Liabiliti pihak ketiga termasuk",
        "Rangkaian ejen luas untuk sokongan",
        "Tersedia melalui bank utama"
      ],
      msigCons: [
        "Tuntutan lebih lambat (7-14 hari)",
        "Proses tuntutan berasaskan kertas",
        "Sekatan umur (biasanya 8 minggu hingga 8 tahun)",
        "Premium lebih tinggi untuk haiwan lebih tua"
      ],
      etiqaTitle: "Etiqa Pet Care",
      etiqaDesc: "Etiqa menawarkan had tahunan tertinggi di Malaysia, sesuai untuk pemilik yang mahukan perlindungan maksimum.",
      etiqaPros: [
        "Had tahunan tertinggi (sehingga RM 30,000)",
        "Liabiliti pihak ketiga termasuk",
        "Sebahagian daripada kumpulan Maybank",
        "Baik untuk baka bernilai tinggi"
      ],
      etiqaCons: [
        "Pelan kurang fleksibel",
        "Tuntutan boleh mengambil masa 14-21 hari",
        "Keperluan pendaftaran lebih ketat"
      ],
      directAsiaTitle: "DirectAsia Pet Insurance",
      directAsiaDesc: "DirectAsia menawarkan harga kompetitif dengan proses tuntutan mudah, sesuai untuk pemilik yang mementingkan bajet.",
      directAsiaPros: [
        "Harga kompetitif",
        "Permohonan dalam talian mudah",
        "Kadar pembayaran balik baik (80%)",
        "Had tahunan RM 20,000"
      ],
      directAsiaCons: [
        "Pengiktirafan jenama kurang",
        "Pilihan tambahan terhad",
        "Kurang ejen tempatan"
      ],
      coverageTitle: "Jadual Perbandingan Perlindungan",
      costsTitle: "Perbandingan Kos Bulanan",
      costsNote: "Kos berbeza mengikut umur, baka, dan tahap perlindungan haiwan. Haiwan muda dan sihat mendapat kadar terendah.",
      claimsTitle: "Perbandingan Proses Tuntutan",
      verdictTitle: "Keputusan Kami: Mana Satu Dipilih?",
      verdictOyen: "Pilih Oyen jika: Anda mahu tuntutan pantas, lebih suka pengurusan berasaskan aplikasi, atau mempunyai haiwan lebih tua yang syarikat lain tidak akan lindungi.",
      verdictMsig: "Pilih MSIG jika: Anda lebih suka syarikat insurans yang mantap, mahu liabiliti pihak ketiga, atau lebih suka sokongan ejen.",
      verdictEtiqa: "Pilih Etiqa jika: Anda mempunyai baka bernilai tinggi, mahu had perlindungan maksimum, atau lebih suka integrasi Maybank.",
      verdictDirect: "Pilih DirectAsia jika: Anda mementingkan bajet tetapi masih mahu perlindungan kemalangan + penyakit komprehensif.",
      faqTitle: "Soalan Lazim",
      faqs: [
        {
          q: "Bolehkah saya menukar penyedia insurans haiwan peliharaan?",
          a: "Ya, tetapi sebarang keadaan yang didiagnosis di bawah polisi lama anda menjadi sedia ada dan tidak akan dilindungi oleh syarikat insurans baru. Tukar semasa pembaharuan, bukan di tengah polisi."
        },
        {
          q: "Penyedia mana yang mempunyai tuntutan terpantas?",
          a: "Oyen secara konsisten memproses tuntutan dalam 24-48 jam. Syarikat insurans tradisional seperti MSIG mengambil masa 7-14 hari."
        },
        {
          q: "Adakah semua penyedia melindungi lawatan kecemasan veterinar?",
          a: "Ya, semua syarikat insurans haiwan peliharaan utama Malaysia melindungi lawatan kecemasan veterinar di bawah pelan kemalangan dan penyakit mereka."
        },
        {
          q: "Adakah insurans haiwan peliharaan untuk haiwan eksotik?",
          a: "Pada masa ini, kebanyakan penyedia Malaysia hanya menginsuranskan anjing dan kucing. Insurans haiwan peliharaan eksotik belum tersedia secara meluas."
        },
        {
          q: "Apakah umur terbaik untuk membeli insurans haiwan peliharaan?",
          a: "Idealnya antara 8 minggu dan 2 tahun. Premium paling rendah dan tiada keadaan sedia ada wujud lagi."
        }
      ],
      ctaTitle: "Bersedia Melindungi Haiwan Peliharaan Anda?",
      ctaText: "Bandingkan sebut harga daripada semua penyedia dan cari perlindungan terbaik untuk teman berbulu anda.",
    },
    zh: {
      metaTitle: "马来西亚宠物保险比较 2025：Oyen vs MSIG vs Etiqa",
      metaDescription: "比较马来西亚顶级宠物保险提供商。Oyen、MSIG、Etiqa并排比较：保障范围、费用RM 30-150/月、理赔流程、优缺点。",
      title: "马来西亚宠物保险：Oyen vs MSIG vs Etiqa 比较（2025）",
      category: "保险",
      date: "2025年1月5日",
      readTime: "12分钟阅读",
      reviewedBy: "由持牌保险顾问审核",
      heroAlt: "比较马来西亚的宠物保险提供商",
      heroCaption: "为您的毛茸茸朋友找到最佳宠物保险",
      tldr: [
        "Oyen：最快理赔（24-48小时），基于应用程序，RM 45-120/月",
        "MSIG：老牌保险公司信誉好，RM 60-150/月",
        "Etiqa：年度限额最高（高达RM 30,000），RM 70-120/月",
        "所有保险都涵盖意外+疾病；既往病症除外",
        "趁宠物年轻时购买（8岁以下）可获得更低保费"
      ],
      tocItems: [
        { id: "overview", title: "快速比较概览" },
        { id: "oyen", title: "Oyen宠物保险" },
        { id: "msig", title: "MSIG宠物保险" },
        { id: "etiqa", title: "Etiqa宠物护理" },
        { id: "directasia", title: "DirectAsia宠物保险" },
        { id: "coverage", title: "保障范围比较" },
        { id: "costs", title: "费用比较" },
        { id: "claims", title: "理赔流程比较" },
        { id: "verdict", title: "我们的建议：如何选择？" },
        { id: "faqs", title: "常见问题" },
      ],
      intro: "在马来西亚选择宠物保险可能令人困惑，因为多家提供商提供不同的计划。我们已经做了调研，这样您就不必费心了。这份全面的比较涵盖了Oyen、MSIG、Etiqa和DirectAsia——马来西亚的主要宠物保险提供商。",
      overviewTitle: "快速比较概览",
      oyenTitle: "Oyen宠物保险",
      oyenDesc: "Oyen是马来西亚最受欢迎的宠物保险初创公司，以现代化的应用程序体验和快速理赔处理而闻名。",
      oyenPros: [
        "最快理赔：24-48小时处理",
        "用户友好的移动应用程序",
        "无年龄限制投保",
        "在线透明定价",
        "电子钱包报销选项"
      ],
      oyenCons: [
        "较新的公司（记录较少）",
        "年度限额低于某些竞争对手",
        "没有实体办公室进行当面咨询"
      ],
      msigTitle: "MSIG宠物保险",
      msigDesc: "MSIG是一家拥有数十年经验的老牌国际保险公司。他们的宠物保险提供可靠的保障，背后是值得信赖的品牌。",
      msigPros: [
        "老牌、值得信赖的保险公司",
        "包含第三方责任险",
        "广泛的代理商网络提供支持",
        "可通过主要银行购买"
      ],
      msigCons: [
        "理赔较慢（7-14天）",
        "纸质理赔流程",
        "年龄限制（通常8周至8岁）",
        "老年宠物保费更高"
      ],
      etiqaTitle: "Etiqa宠物护理",
      etiqaDesc: "Etiqa提供马来西亚最高的年度限额，适合想要最大保障的宠物主人。",
      etiqaPros: [
        "最高年度限额（高达RM 30,000）",
        "包含第三方责任险",
        "属于马来亚银行集团",
        "适合高价值品种"
      ],
      etiqaCons: [
        "计划灵活性较低",
        "理赔可能需要14-21天",
        "投保要求更严格"
      ],
      directAsiaTitle: "DirectAsia宠物保险",
      directAsiaDesc: "DirectAsia提供具有竞争力的价格和简单的理赔流程，适合注重预算的宠物主人。",
      directAsiaPros: [
        "价格具有竞争力",
        "简单的在线申请",
        "良好的报销率（80%）",
        "年度限额RM 20,000"
      ],
      directAsiaCons: [
        "品牌知名度较低",
        "附加选项有限",
        "当地代理商较少"
      ],
      coverageTitle: "保障范围比较表",
      costsTitle: "月费比较",
      costsNote: "费用因宠物年龄、品种和保障级别而异。年轻健康的宠物可获得最低费率。",
      claimsTitle: "理赔流程比较",
      verdictTitle: "我们的建议：如何选择？",
      verdictOyen: "选择Oyen如果：您想要快速理赔，喜欢基于应用程序的管理，或者有其他保险公司不愿承保的老年宠物。",
      verdictMsig: "选择MSIG如果：您偏好老牌保险公司，想要第三方责任险，或喜欢代理商支持。",
      verdictEtiqa: "选择Etiqa如果：您有高价值品种，想要最高保障限额，或偏好马来亚银行整合。",
      verdictDirect: "选择DirectAsia如果：您注重预算但仍想要全面的意外+疾病保障。",
      faqTitle: "常见问题",
      faqs: [
        {
          q: "我可以更换宠物保险提供商吗？",
          a: "可以，但在旧保单下诊断的任何疾病都会成为既往病症，新保险公司不会承保。在续保时更换，而不是保单中途。"
        },
        {
          q: "哪家提供商理赔最快？",
          a: "Oyen始终在24-48小时内处理理赔。MSIG等传统保险公司需要7-14天。"
        },
        {
          q: "所有提供商都承保紧急兽医就诊吗？",
          a: "是的，所有马来西亚主要宠物保险公司都在其意外和疾病计划下承保紧急兽医就诊。"
        },
        {
          q: "有异国宠物保险吗？",
          a: "目前，大多数马来西亚提供商只为狗和猫投保。异国宠物保险尚未广泛可用。"
        },
        {
          q: "购买宠物保险的最佳年龄是多少？",
          a: "理想情况下在8周到2岁之间。保费最低，而且尚未存在既往病症。"
        }
      ],
      ctaTitle: "准备保护您的宠物了吗？",
      ctaText: "比较所有提供商的报价，为您的毛茸茸朋友找到最佳保障。",
    }
  };
  return content[language] || content.en;
};

export const InsuranceComparisonGuide = () => {
  const { language } = useLanguage();
  const c = getContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.title,
    "description": c.metaDescription,
    "image": "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-05",
    "dateModified": "2025-01-05",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/pet-insurance-comparison"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const relatedArticles = [
    { to: "/blog/pet-insurance-malaysia", title: "Complete Insurance Guide", description: "Full guide to pet insurance coverage", icon: Shield, color: "text-primary" },
    { to: "/blog/pet-emergency-costs-malaysia", title: "Emergency Costs", description: "What emergency treatment costs", icon: DollarSign, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle={c.metaTitle}
      metaDescription={c.metaDescription}
      path="/blog/pet-insurance-comparison"
      language={language}
      category={c.category}
      categoryColor="primary"
      title={c.title}
      date={c.date}
      readTime={c.readTime}
      reviewedBy={c.reviewedBy}
      heroImage={insuranceHero}
      heroImageAlt={c.heroAlt}
      heroImageCaption={c.heroCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <TLDRBox items={c.tldr} />
      <CostCTA variant={8} />
      <TableOfContents items={c.tocItems} />

      <p className="text-muted-foreground mb-8">{c.intro}</p>

      {/* Overview Section */}
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{c.overviewTitle}</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 text-left font-semibold">Provider</th>
                <th className="p-4 text-left font-semibold">Monthly Cost</th>
                <th className="p-4 text-left font-semibold">Annual Limit</th>
                <th className="p-4 text-left font-semibold">Claims Speed</th>
                <th className="p-4 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-4 font-semibold">Oyen <Star className="inline h-4 w-4 text-yellow-500" /></td>
                <td className="p-4">RM 45-120</td>
                <td className="p-4">RM 8,000-20,000</td>
                <td className="p-4 text-primary font-semibold">24-48 hours</td>
                <td className="p-4">Fast claims, app users</td>
              </tr>
              <tr className="border-t border-border bg-muted/30">
                <td className="p-4 font-semibold">MSIG</td>
                <td className="p-4">RM 60-150</td>
                <td className="p-4">RM 10,000-15,000</td>
                <td className="p-4">7-14 days</td>
                <td className="p-4">Established insurer trust</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-4 font-semibold">Etiqa</td>
                <td className="p-4">RM 70-120</td>
                <td className="p-4">RM 15,000-30,000</td>
                <td className="p-4">14-21 days</td>
                <td className="p-4">High coverage limits</td>
              </tr>
              <tr className="border-t border-border bg-muted/30">
                <td className="p-4 font-semibold">DirectAsia</td>
                <td className="p-4">RM 65-110</td>
                <td className="p-4">RM 20,000</td>
                <td className="p-4">7-14 days</td>
                <td className="p-4">Budget-conscious</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Oyen */}
      <section id="oyen" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Star className="h-6 w-6 text-yellow-500" />
          {c.oyenTitle}
        </h2>
        <p className="text-muted-foreground mb-6">{c.oyenDesc}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-primary">✅ Pros</h3>
            <ul className="space-y-2">
              {c.oyenPros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-destructive/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-destructive">❌ Cons</h3>
            <ul className="space-y-2">
              {c.oyenCons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MSIG */}
      <section id="msig" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.msigTitle}</h2>
        <p className="text-muted-foreground mb-6">{c.msigDesc}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-primary">✅ Pros</h3>
            <ul className="space-y-2">
              {c.msigPros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-destructive/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-destructive">❌ Cons</h3>
            <ul className="space-y-2">
              {c.msigCons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Etiqa */}
      <section id="etiqa" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.etiqaTitle}</h2>
        <p className="text-muted-foreground mb-6">{c.etiqaDesc}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-primary">✅ Pros</h3>
            <ul className="space-y-2">
              {c.etiqaPros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-destructive/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-destructive">❌ Cons</h3>
            <ul className="space-y-2">
              {c.etiqaCons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DirectAsia */}
      <section id="directasia" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.directAsiaTitle}</h2>
        <p className="text-muted-foreground mb-6">{c.directAsiaDesc}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-primary">✅ Pros</h3>
            <ul className="space-y-2">
              {c.directAsiaPros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-destructive/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-destructive">❌ Cons</h3>
            <ul className="space-y-2">
              {c.directAsiaCons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section id="verdict" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{c.verdictTitle}</h2>
        <div className="space-y-4">
          <div className="bg-card border border-border p-4 rounded-xl">
            <p><strong className="text-primary">🏆 Oyen:</strong> {c.verdictOyen}</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <p><strong>🏛️ MSIG:</strong> {c.verdictMsig}</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <p><strong>💰 Etiqa:</strong> {c.verdictEtiqa}</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <p><strong>📊 DirectAsia:</strong> {c.verdictDirect}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{c.faqTitle}</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {c.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <div className="bg-primary/10 p-8 rounded-2xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">{c.ctaTitle}</h2>
        <p className="text-muted-foreground mb-4">{c.ctaText}</p>
        <Button asChild size="lg">
          <Link to="/blog/pet-insurance-malaysia">
            <Shield className="h-5 w-5 mr-2" /> View Full Insurance Guide
          </Link>
        </Button>
      </div>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};
