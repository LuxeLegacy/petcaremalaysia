import AuthorityHubRouter from './AuthorityHubRouter';
import { catDentalConfig } from '@/data/cat-dental';

const CatDentalRouter = () => (
  <AuthorityHubRouter
    config={catDentalConfig}
    hubTitle={{
      en: 'Cat Dental Disease',
      ms: 'Penyakit Pergigian Kucing',
      zh: '猫牙科疾病',
    }}
  />
);

export default CatDentalRouter;
