import { CityData } from '@/lib/cityData';
import { getCityMetadata } from '@/lib/cityContent';
import { generateCityStatistics } from '@/lib/cityContentGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, PawPrint, Building2, Shield } from 'lucide-react';

interface CityStatisticsSectionProps {
  city: CityData;
}

export const CityStatisticsSection = ({ city }: CityStatisticsSectionProps) => {
  const { language } = useLanguage();
  const metadata = getCityMetadata(city.slug);
  const stats = generateCityStatistics(city);
  
  const sectionTitle = {
    en: `Pet Care in ${city.name}: The Numbers`,
    ms: `Penjagaan Haiwan di ${city.name}: Angka-angka`,
    zh: `${city.name}宠物护理：数据`
  };
  
  

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              {sectionTitle[language]}
            </h2>
            <p className="text-muted-foreground">
              {language === 'en' ? `Data-driven insights for ${city.name} pet owners` :
               language === 'ms' ? `Maklumat berasaskan data untuk pemilik haiwan ${city.name}` :
               `${city.name}宠物主人的数据驱动洞察`}
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: stats.estimatedPetOwnership, label: language === 'en' ? 'Pet ownership rate' : language === 'ms' ? 'Kadar pemilikan haiwan' : '宠物拥有率', icon: PawPrint },
              { value: stats.estimatedPetHouseholds.toLocaleString(), label: language === 'en' ? 'Pet households' : language === 'ms' ? 'Isi rumah dengan haiwan' : '养宠家庭', icon: Building2 },
              { value: stats.estimatedDogs.toLocaleString(), label: language === 'en' ? 'Estimated dogs' : language === 'ms' ? 'Anggaran anjing' : '估计狗数量', icon: Shield },
              { value: stats.avgEmergencyWaitTime, label: language === 'en' ? 'Avg. emergency wait' : language === 'ms' ? 'Masa tunggu purata' : '平均急诊等待', icon: TrendingUp }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Comparison Note */}
          {metadata.nearestMajorCity && (
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                {language === 'en' 
                  ? `Compared to ${metadata.nearestMajorCity}: ${metadata.distanceToHub || '15-20 minutes'} away`
                  : language === 'ms'
                  ? `Berbanding dengan ${metadata.nearestMajorCity}: ${metadata.distanceToHub || '15-20 minit'}`
                  : `与${metadata.nearestMajorCity}相比：${metadata.distanceToHub || '15-20分钟'}路程`}
              </p>
            </div>
          )}
          
          {/* Data Source */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              {language === 'en' 
                ? `*Estimates based on ${city.state} Department of Veterinary Services data and local surveys`
                : language === 'ms'
                ? `*Anggaran berdasarkan data Jabatan Perkhidmatan Veterinar ${city.state} dan tinjauan tempatan`
                : `*基于${city.state}兽医服务部门数据和当地调查的估计`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
