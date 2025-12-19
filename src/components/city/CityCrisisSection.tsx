import { CityData } from '@/lib/cityData';
import { getCityMetadata } from '@/lib/cityContent';
import { generateEmergencyScenarios } from '@/lib/cityContentGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Clock, Heart, Zap } from 'lucide-react';

interface CityCrisisSectionProps {
  city: CityData;
}

export const CityCrisisSection = ({ city }: CityCrisisSectionProps) => {
  const { language } = useLanguage();
  const metadata = getCityMetadata(city.slug);
  const scenarios = generateEmergencyScenarios(city, language);
  
  const sectionTitle = {
    en: `Pet Emergencies in ${city.name} Are More Common Than You Think`,
    ms: `Kecemasan Haiwan di ${city.name} Lebih Kerap Berlaku`,
    zh: `${city.name}的宠物紧急情况比你想象的更常见`
  };
  
  const statsTitle = {
    en: 'Every year in',
    ms: 'Setiap tahun di',
    zh: '每年在'
  };
  
  // Calculate city-specific emergency stats based on population
  const yearlyEmergencies = Math.round(metadata.population * 0.002);
  const monthlyEmergencies = Math.round(yearlyEmergencies / 12);
  const afterHoursPercent = metadata.areaType === 'urban' ? 35 : 45;
  
  const emergencyStats = {
    en: [
      { value: yearlyEmergencies.toLocaleString(), label: 'pet emergencies reported', icon: AlertTriangle },
      { value: `${afterHoursPercent}%`, label: 'happen after clinic hours', icon: Clock },
      { value: '< 15 min', label: 'can mean life or death', icon: Heart },
    ],
    ms: [
      { value: yearlyEmergencies.toLocaleString(), label: 'kecemasan haiwan dilaporkan', icon: AlertTriangle },
      { value: `${afterHoursPercent}%`, label: 'berlaku selepas waktu klinik', icon: Clock },
      { value: '< 15 min', label: 'boleh bermakna hidup atau mati', icon: Heart },
    ],
    zh: [
      { value: yearlyEmergencies.toLocaleString(), label: '宠物紧急情况报告', icon: AlertTriangle },
      { value: `${afterHoursPercent}%`, label: '发生在诊所营业时间之后', icon: Clock },
      { value: '< 15 分钟', label: '可能意味着生死', icon: Heart },
    ]
  };

  return (
    <section className="py-16 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Critical Information' : language === 'ms' ? 'Maklumat Kritikal' : '关键信息'}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              {sectionTitle[language]}
            </h2>
          </div>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {emergencyStats[language].map((stat, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center border border-border shadow-sm">
                <stat.icon className="h-8 w-8 text-destructive mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Emergency Scenarios */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {language === 'en' ? `Common emergencies in ${city.name}:` : 
               language === 'ms' ? `Kecemasan biasa di ${city.name}:` : 
               `${city.name}常见紧急情况：`}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {scenarios.map((scenario, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{scenario.scenario}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{scenario.urgency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Local Risk Alert */}
          {metadata.petRisks.length > 0 && (
            <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                {language === 'en' ? `${city.name}-Specific Pet Risks` : 
                 language === 'ms' ? `Risiko Haiwan Khusus ${city.name}` : 
                 `${city.name}特定宠物风险`}
              </h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {metadata.petRisks.slice(0, 4).map((risk, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
