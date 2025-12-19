import { CityData } from '@/lib/cityData';
import { getCityMetadata, getDVSOffice, getLocalCouncil } from '@/lib/cityContent';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building, Phone, Globe, FileText, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CityGovernmentSectionProps {
  city: CityData;
}

export const CityGovernmentSection = ({ city }: CityGovernmentSectionProps) => {
  const { language } = useLanguage();
  const metadata = getCityMetadata(city.slug);
  const dvsOffice = getDVSOffice(city.state);
  const localCouncil = getLocalCouncil(city.slug, city.state);
  
  const sectionTitle = {
    en: `Official Pet Resources in ${city.name}`,
    ms: `Sumber Rasmi Haiwan di ${city.name}`,
    zh: `${city.name}官方宠物资源`
  };
  
  const dvsTitle = {
    en: `${city.state} Department of Veterinary Services`,
    ms: `Jabatan Perkhidmatan Veterinar ${city.state}`,
    zh: `${city.state}兽医服务部门`
  };
  
  const councilTitle = {
    en: 'Local Council - Dog Licensing',
    ms: 'Majlis Tempatan - Lesen Anjing',
    zh: '地方议会 - 狗牌照'
  };
  
  const licensingInfo = {
    en: {
      spayed: 'Spayed/Neutered dog license',
      unspayed: 'Unspayed/Unneutered dog license',
      renewal: 'Annual renewal required'
    },
    ms: {
      spayed: 'Lesen anjing dimandulkan',
      unspayed: 'Lesen anjing tidak dimandulkan',
      renewal: 'Pembaharuan tahunan diperlukan'
    },
    zh: {
      spayed: '绝育狗牌照',
      unspayed: '未绝育狗牌照',
      renewal: '需要年度更新'
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/50 text-secondary-foreground px-4 py-2 rounded-full mb-4">
              <Building className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Government Services' : language === 'ms' ? 'Perkhidmatan Kerajaan' : '政府服务'}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              {sectionTitle[language]}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* DVS Office */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  {dvsTitle[language]}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{dvsOffice.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href={`tel:${dvsOffice.phone}`} className="text-sm text-primary hover:underline">
                    {dvsOffice.phone}
                  </a>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    {language === 'en' ? 'Services Available:' : language === 'ms' ? 'Perkhidmatan Tersedia:' : '可用服务：'}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {language === 'en' ? 'Pet import/export permits' : language === 'ms' ? 'Permit import/eksport haiwan' : '宠物进出口许可证'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {language === 'en' ? 'Rabies vaccination certification' : language === 'ms' ? 'Sijil vaksin rabies' : '狂犬病疫苗认证'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {language === 'en' ? 'Animal welfare complaints' : language === 'ms' ? 'Aduan kebajikan haiwan' : '动物福利投诉'}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Local Council */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {councilTitle[language]}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground">{localCouncil.name}</p>
                </div>
                
                {localCouncil.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <a 
                      href={localCouncil.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {language === 'en' ? 'Official Website' : language === 'ms' ? 'Laman Web Rasmi' : '官方网站'}
                    </a>
                  </div>
                )}
                
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    {language === 'en' ? 'Dog License Fees:' : language === 'ms' ? 'Yuran Lesen Anjing:' : '狗牌照费用：'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="text-sm text-muted-foreground">{licensingInfo[language].spayed}</span>
                      <span className="text-sm font-medium text-foreground">RM10/year</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="text-sm text-muted-foreground">{licensingInfo[language].unspayed}</span>
                      <span className="text-sm font-medium text-foreground">{localCouncil.dogLicenseFee}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    * {licensingInfo[language].renewal}
                  </p>
                </div>
                
                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href={localCouncil.website} target="_blank" rel="noopener noreferrer">
                    {language === 'en' ? 'Apply for Dog License' : language === 'ms' ? 'Mohon Lesen Anjing' : '申请狗牌照'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Important Notice */}
          <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground">
              {language === 'en' 
                ? `All dogs in ${city.name} must be licensed and vaccinated against rabies. Failure to comply may result in fines up to RM2,000.`
                : language === 'ms'
                ? `Semua anjing di ${city.name} mesti dilesenkan dan divaksin terhadap rabies. Kegagalan mematuhi boleh mengakibatkan denda sehingga RM2,000.`
                : `${city.name}所有狗必须获得许可并接种狂犬病疫苗。不遵守可能导致高达RM2,000的罚款。`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
